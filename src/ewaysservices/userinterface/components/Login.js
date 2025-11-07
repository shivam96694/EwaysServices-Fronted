import { DialogContent, Dialog, Button, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import google from '../../../../assets/google.png';
import myImage from '../../../../assets/generated-image (1).png'
import gmail from '../../../../assets/gmail.png';
import SweetAlert2 from "react-sweetalert2";

export default function Login() {
  const [checked, setChecked] = useState(false);
  const [mobileno, setMobileno] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [error, setError] = useState({});
  const [swalProps, setSwalProps] = useState({});

  const handleCloseDialog = () => {
    setLoginOpen(false);
  };

const handleChange = (event) => {
  setChecked(event.target.checked);
  // Do NOT call validation or show toast here
};

  const handleError = (label, errorMessage) => {
    setError((prev) => ({ ...prev, [label]: errorMessage }));
  };

  const validate = () => {
    let err = false;

   

   

    const mobile_pattern = /^[0-9]{10}$/;
    if (!mobile_pattern.test(mobileno)) {
      handleError("mobileno", "Please input a valid mobile number.");
      err = true;
    }

    if (!checked) {
      handleError("checked", "Please accept terms and policies.");
      err = true;
    } else {
      handleError("checked", "");
      
    }

    return err;
  };
const handleSubmit = () => {
  const err = validate();

  setSwalProps({
    show: true,
    title: err ? "Please fix the errors and try again." : "Account created successfully!",
    icon: err ? "error" : "success",
    timer: 3000,
    toast: true,
  
  target: 'body',
    showConfirmButton: false,
    didClose: () => setSwalProps({ show: false }),
  });

  if (!err) {
setLoginOpen(false);
 
  setMobileno("");
  setChecked(false);
  setError({});  }
};

  return (
    <>
  
      <Button variant="contained" color="primary" onClick={() => setLoginOpen(true)}>
        Open Login Up Dialog
      </Button>

      <Dialog
        open={loginOpen}
        maxWidth="sm"
        PaperProps={{ sx: { borderRadius: "10px", width: "700px", maxWidth: "110vw" } }}
      >
        <DialogContent style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{display:'flex'}}>

      <img src={myImage} alt="Astrology" width="320" style={{paddingRight:10,objectFit:'cover'}} />
          
          <div style={{ display: "flex", flexDirection: "column", borderRadius: 10, height: "auto",paddingLeft:10 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  fontSize: "2rem",
                  
                  
                  fontWeight: 520,
                  color: "rgb(79, 79, 79)",
                  fontFamily: "Okra, Helvetica, sans-serif",
                  marginBottom:15
                }}
              >
               Login
              </div>
              <div style={{ marginLeft: "auto", cursor: "pointer" }}>
                <CloseIcon onClick={handleCloseDialog} />
              </div>
            </div>

            <div >
              
             
              <TextField
                onFocus={() => handleError("mobileno", "")}
                error={!!error.mobileno}
                helperText={error.mobileno}
                onChange={(e) => setMobileno(e.target.value)}
                fullWidth
                 value={mobileno}
                label="Phone Number"
                type="text"
                sx={{ marginBottom: 2 }}
              />
              <div style={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                <Checkbox onFocus={() => handleError("checked", "")}
                error={!!error.checked}
                helperText={error.checked} value={checked} checked={checked} onChange={handleChange} style={{ color: "red" }} />
                <span>
                  I agree to astrologer{" "}
                  <span style={{ color: "red", cursor: "pointer" }}>Terms of Service,</span>{" "}
                  <span style={{ color: "red", cursor: "pointer" }}>Privacy Policy</span> and{" "}
                  <span style={{ color: "red", cursor: "pointer" }}>Content Policies</span>
                </span>
              </div>
              {!!error.checked && (
                <div style={{ color: "red", marginBottom: 16 }}>{error.checked}</div>
              )}

              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#F39C12", color: "#fff", height: 45,mt:2 }}
                onClick={handleSubmit}
              >
                Get Otp
              </Button>
            </div>

            
<div style={{width:'95%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
<Button variant="contained" sx={{ backgroundColor: "white", color: "#000", height: 45, width: '100%',margin:3,fontSize:13,textTransform:'none',fontWeight:530 }}>
        <img src={gmail} style={{width:'3%',marginRight:10}} />   Continue with Email
          </Button>
 <Button variant="contained" sx={{ backgroundColor: "white", color: "#000", height: 45, width: '100%',fontSize:13,textTransform:'none',fontWeight:530 ,marginBottom:5}}>
 <img src={google} style={{width:'3%',marginRight:10}} />     Sign in With Google
          </Button>

                      <div style={{ width: "100%", height: 0, border: "0.1px solid #dcdcdc", margin: "10px 10px 10px 10px" }}></div>

                    <div style={{width:'90%',display:'flex',alignItems:'center',justifyContent:'flex-start',marginRight:'auto' }}>
                    
                    <div style={{color:'rgb(54, 54, 54)'}}>
                    New to Astrologer?
                    </div>

                    <div style={{color:'red',cursor:'pointer',marginLeft:10}}>
                     Create Account
                    </div>
                    </div>

                    </div>
          </div>
         
         </div>
        </DialogContent>
      </Dialog>
<div >
  <SweetAlert2 {...swalProps} />
</div>

    </>
  );
}
