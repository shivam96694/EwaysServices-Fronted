import { DialogContent, Dialog, Button, TextField, Checkbox } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Swal from "sweetalert2";
import google from "../../../assets/google.png";
import gmail from "../../../assets/gmail.png";
import { postData } from "../../services/FetchApiServices"; // 👈 add this import
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function Login({ loginOpen, setLoginOpen,setUserData }) {
  const [checked, setChecked] = useState(false);
  const [identifier, setIdentifier] = useState(""); // email or phone
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
const dispatch = useDispatch();

  // Close dialog
  const handleCloseDialog = () => {
    setLoginOpen(false);
  };

  // Handle error updates
  const handleError = (label, errorMessage) => {
    setError((prev) => ({ ...prev, [label]: errorMessage }));
  };

  // Handle validation
  const validate = () => {
    let err = false;

    if (identifier.trim().length === 0) {
      handleError("identifier", "Email or Phone number required.");
      err = true;
    }

    if (password.trim().length < 6) {
      handleError("password", "Password must be at least 6 characters.");
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

 

  // Handle login submission
  const handleSubmit = async () => {
  const err = validate();
  if (err) {
    Swal.fire({
      title: "Please fix the errors and try again.",
      icon: "error",
      timer: 3000,
      toast: true,
      zIndex: 3000,
  target: document.querySelector(".MuiDialog-root"), // dialog wrapper
      showConfirmButton: false,
    });
    return;
  }

  try {
    // ✅ send login data to backend
    const res = await postData("users/login", { identifier, password });

    if (res.success) {
      setUserData(res.user);
      Swal.fire({
        title: "Login Successful!",
        text: `Welcome back ${res.user.username}! 🚀`,
        icon: "success",
        timer: 5000,
        toast: true,
        zIndex: 3000,
  target: document.querySelector(".MuiDialog-root"), // dialog wrapper
        showConfirmButton: false,
      });
 localStorage.setItem("user", JSON.stringify(res.user)); // ✅ save user
  dispatch({ type: "ADD_USER", payload: res.user });
  setUserData(res.user);    setIdentifier("");
  setPassword("");
  setChecked(false);

  // ✅ Close dialog after a short delay (optional)
  setTimeout(() => setLoginOpen(false), 800);
    } else {
      Swal.fire({
        title: res.error || "Invalid credentials!",
        icon: "error",
        timer: 3000,
        toast: true,
        zIndex: 3000,
  target: document.querySelector(".MuiDialog-root"), // dialog wrapper
        showConfirmButton: false,
      });
    }
  } catch (error) {
    console.error("Login Error:", error);
    Swal.fire({
      title: "Server Error. Please try again later.",
      icon: "error",
      timer: 3000,
      toast: true,
      zIndex: 3000,
  target: document.querySelector(".MuiDialog-root"), // dialog wrapper
      showConfirmButton: false,
    });
  }
};

 useEffect(() => {
  if (!loginOpen) {
    setTimeout(() => {
      setIdentifier("");
      setPassword("");
      setChecked(false);
      setError({});
    }, 200); // small delay so Dialog unmounts smoothly
  }
}, [loginOpen]);
  return (
    <>
      <Dialog
        open={loginOpen}
        maxWidth="sm"
        PaperProps={{
          sx: { borderRadius: "10px", width: "550px", maxWidth: "90vw" },
        }}
      >
        <DialogContent
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 10,
              height: "auto",
              width: "100%",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 520,
                  color: "rgb(79, 79, 79)",
                  fontFamily: "Okra, Helvetica, sans-serif",
                  marginBottom: 20,
                }}
              >
                Login
              </div>
              <div
                style={{ marginLeft: "auto", cursor: "pointer", marginBottom: 20 }}
              >
                <CloseIcon onClick={handleCloseDialog} />
              </div>
            </div>

            {/* Form */}
            <div>
              <TextField
                onFocus={() => handleError("identifier", "")}
                error={!!error.identifier}
                helperText={error.identifier}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                fullWidth
                label="Email or Phone Number"
                sx={{ marginBottom: 2 }}
              />

              <TextField
                onFocus={() => handleError("password", "")}
                error={!!error.password}
                helperText={error.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                label="Password"
                type="password"
                sx={{ marginBottom: 2 }}
              />

              {/* Checkbox */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                <Checkbox
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  onFocus={() => handleError("checked", "")}
                  style={{ color: "red" }}
                />
                <span>
                  I agree to{" "}
                  <span style={{ color: "red", cursor: "pointer" }}>
                    Terms of Service,
                  </span>{" "}
                  <span style={{ color: "red", cursor: "pointer" }}>
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "red", cursor: "pointer" }}>
                    Content Policies
                  </span>
                </span>
              </div>
              {!!error.checked && (
                <div style={{ color: "red", marginBottom: 16 }}>{error.checked}</div>
              )}

              {/* Login button */}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#00a8ff",
                  color: "#fff",
                  height: 45,
                  mt: 2,
                  fontWeight: 500,
                }}
                onClick={handleSubmit}
              >
                Login
              </Button>

              {/* Divider */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "20px 0",
                }}
              >
                <div
                  style={{
                    width: "45%",
                    border: "0.5px solid #dcdcdc",
                    marginRight: 10,
                  }}
                ></div>
                <div style={{ color: "grey", fontSize: 16 }}>or</div>
                <div
                  style={{
                    width: "45%",
                    border: "0.5px solid #dcdcdc",
                    marginLeft: 10,
                  }}
                ></div>
              </div>

              {/* Email & Google buttons */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "#000",
                  height: 45,
                  width: "100%",
                  fontSize: 14,
                  textTransform: "none",
                  fontWeight: 530,
                  marginBottom: 2,
                  boxShadow: "0 0 3px rgba(0,0,0,0.2)",
                }}
              >
                <img src={gmail} alt="Gmail" style={{ width: "4%", marginRight: 10 }} />
                Continue with Email
              </Button>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "#000",
                  height: 45,
                  width: "100%",
                  fontSize: 14,
                  textTransform: "none",
                  fontWeight: 530,
                  marginBottom: 2,
                  boxShadow: "0 0 3px rgba(0,0,0,0.2)",
                }}
              >
                <img src={google} alt="Google" style={{ width: "4%", marginRight: 10 }} />{" "}
                Sign in with Google
              </Button>

              <div style={{ width: "100%", height: 0, border: "0.1px solid #dcdcdc", margin: "10px 10px 10px 10px" }}></div>

                    <div style={{width:'90%',display:'flex',alignItems:'center',justifyContent:'flex-start',marginRight:'auto' }}>
                    
                    <div style={{color:'rgb(54, 54, 54)'}}>
                    New to EwaysService?
                    </div>

                    <div style={{color:'red',cursor:'pointer',marginLeft:10}}>
                     Create Account
                    </div>

                    </div>

            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
