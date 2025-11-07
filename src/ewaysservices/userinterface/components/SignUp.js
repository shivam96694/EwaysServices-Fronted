import { DialogContent, Dialog, Button, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import google from "../../../../assets/google.png";
import SweetAlert2 from "react-sweetalert2";
import myImage from '../../../../assets/generated-image (1).png'
export default function SignUp() {
  const [checked, setChecked] = useState(false);
  const [mobileno, setMobileno] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [userName, setUserName] = useState("");
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [error, setError] = useState({});
  const [swalProps, setSwalProps] = useState({});

  const handleCloseDialog = () => {
    setSignUpOpen(false);
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

    if (userName.trim().length === 0) {
      handleError("userName", "Full Name should not be blank.");
      err = true;
    }

    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[^\s]{2,}$/;
    if (!email_pattern.test(email_id)) {
      handleError("email_id", "Please input a valid Email.");
      err = true;
    }

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
setSignUpOpen(false);
  setUserName("");
  setEmail_id("");
  setMobileno("");
  setChecked(false);
  setError({});  }
};

  return (
    <>
  
      <Button variant="contained" color="primary" onClick={() => setSignUpOpen(true)}>
        Open Sign Up Dialog
      </Button>

      <Dialog
        open={signUpOpen}
        maxWidth="sm"
        PaperProps={{ sx: { borderRadius: "10px", width: "700px", maxWidth: "90vw" } }}
      >
        <DialogContent style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        
          <div style={{display:'flex'}}>

      <img src={myImage} alt="Astrology" width="320" style={{paddingRight:10,objectFit:'cover'}} />
         
        
          <div style={{ display: "flex", flexDirection: "column", borderRadius: 10, height: "auto" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  fontSize: "2rem",
                 
                  
                  fontWeight: 520,
                  color: "rgb(79, 79, 79)",
                  fontFamily: "Okra, Helvetica, sans-serif",
                  marginBottom:10
                }}
              >
                Signup
              </div>
              <div style={{ marginLeft: "auto", cursor: "pointer" }}>
                <CloseIcon onClick={handleCloseDialog} />
              </div>
            </div>

            <div >
              <TextField
                onFocus={() => handleError("userName", "")}
                error={!!error.userName}
                helperText={error.userName}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                fullWidth
                label="Full Name"
                sx={{ marginBottom: 2 }}
              />
              <TextField
                onFocus={() => handleError("email_id", "")}
                error={!!error.email_id}
                helperText={error.email_id}
                onChange={(e) => setEmail_id(e.target.value)}
                fullWidth
                 value={email_id}
                label="Email"
                type="email"
                sx={{ marginBottom: 2 }}
              />
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
                sx={{ backgroundColor: "#F39C12", color: "#fff", height: 45,mt:3 }}
                onClick={handleSubmit}
                
              >
                Create account
              </Button>
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
