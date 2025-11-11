import { DialogContent, Dialog, Button, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { generateOtp, postData } from "../../services/FetchApiServices";
import Swal from "sweetalert2";
import google from "../../../assets/google.png";
import myImage from "../../../assets/eway2.png";

export default function SignUp({ signUpOpen,  setSignUpOpen,  setOtpOpen, setOtpValue,  setUserData,setStatusScreen}) {
  const [checked, setChecked] = useState(false);
  const [mobileno, setMobileno] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState({});
  const [swalProps, setSwalProps] = useState({});
  const dispatch = useDispatch();
const [password, setPassword] = useState("");

  // Close dialog
  const handleCloseDialog = () => {
    setSignUpOpen(false);
  };

  // Handle checkbox toggle
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // Handle error messages
  const handleError = (label, errorMessage) => {
    setError((prev) => ({ ...prev, [label]: errorMessage }));
  };

  // Validate all inputs before submit
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
    if (password.trim().length < 6) {
  handleError("password", "Password must be at least 6 characters.");
  err = true;
}


    return err;
  };

  // Submit handler — integrates with backend + OTP
 const handleSubmit = async () => {
  const err = validate();
  if (err) {
    Swal.fire({
      title: "Please fix the errors and try again.",
  target: document.querySelector(".MuiDialog-root"), // dialog wrapper
  zIndex: 3000,
      icon: "error",
      timer: 3000,
      toast: true,
      showConfirmButton: false,
              customClass: { popup: "swal-front" },

    });
    return;
  }

  // Prepare the correct payload for backend
  const payload = {
    username: userName,
    useremail: email_id,
    usermobileno: mobileno,
    password,
  };

  try {
    // ✅ Correct backend route
    const res = await postData("users/add", payload);

    // ✅ Backend returns { success: true/false, message, error }
    if (!res.success && res.error === "Email or mobile already registered") {
      Swal.fire({
        title: "Email or Mobile already registered!",
        icon: "warning",
  target: document.querySelector(".MuiDialog-root"), // dialog wrapper
  zIndex: 3000,
        timer: 3000,
        toast: true,
        showConfirmButton: false,
                customClass: { popup: "swal-front" },

      });
      return;
    }

    if (res.success) {
      // If user not already exists → proceed OTP
      const otp = generateOtp();
      alert(otp); // 👈 for now; replace with real OTP send later
      setOtpValue(otp);
      setOtpOpen(true);
      setSignUpOpen(false);
      setStatusScreen("SignUp");
      setUserData({ mobileno, email_id, username: userName });

      Swal.fire({
        title: "OTP Sent Successfully!",
        text: `Use OTP: ${otp}`,
        icon: "success",
  target: document.querySelector(".MuiDialog-root"), // dialog wrapper
  zIndex: 3000,
        timer: 3000,
        toast: true,
        showConfirmButton: false,
        customClass: { popup: "swal-front" },
      });
    } else {
      Swal.fire({
        title: res.error || "Signup failed. Please try again.",
        icon: "error",
  target: document.querySelector(".MuiDialog-root"), // dialog wrapper
  zIndex: 3000,
        timer: 3000,
        toast: true,
        showConfirmButton: false,
                customClass: { popup: "swal-front" },
      });
    }
  } catch (error) {
    console.error("Signup Error:", error);
    Swal.fire({
      title: "Server Error. Please try again later.",
      icon: "error",
  target: document.querySelector(".MuiDialog-root"), // dialog wrapper
  zIndex: 3000,
        timer: 3000,
      toast: true,
      showConfirmButton: false,
              customClass: { popup: "swal-front" },
    });
  }
};


  return (
    <>
      <Dialog
        open={signUpOpen}
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
              }}
            >
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
                  Signup
                </div>
                <div style={{ marginLeft: "auto", cursor: "pointer", marginBottom: 20, }}>
                  <CloseIcon onClick={handleCloseDialog} />
                </div>
              </div>

              <div>
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
                  value={email_id}
                  onChange={(e) => setEmail_id(e.target.value)}
                  fullWidth
                  label="Email"
                  type="email"
                  sx={{ marginBottom: 2 }}
                />

                <TextField
                  onFocus={() => handleError("mobileno", "")}
                  error={!!error.mobileno}
                  helperText={error.mobileno}
                  value={mobileno}
                  onChange={(e) => setMobileno(e.target.value)}
                  fullWidth
                  label="Phone Number"
                  type="text"
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

                <div style={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                  <Checkbox
                    onFocus={() => handleError("checked", "")}
                    checked={checked}
                    onChange={handleChange}
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

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#00a8ff", color: "#fff", height: 45, mt: 3 }}
                  onClick={handleSubmit}
                >
                  Create account
                </Button>

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
              </div>
              
            </div>
         
        </DialogContent>
      </Dialog>

   
    </>
  );
}
