import { DialogContent, Dialog, Button, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import google from "../../../../assets/google.png";
import myImage from "../../../../assets/generated-image (1).png";
import gmail from "../../../../assets/gmail.png";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

export default function Login() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [error, setError] = useState({});
  const [swalProps, setSwalProps] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    checked: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, checked: e.target.checked });
  };

  const handleError = (label, errorMessage) => {
    setError((prev) => ({ ...prev, [label]: errorMessage }));
  };

  const validate = () => {
    let err = false;

    const mobile_pattern = /^[0-9]{10}$/;
    if (!mobile_pattern.test(formData.phone)) {
      handleError("phone", "Please input a valid mobile number.");
      err = true;
    } else {
      handleError("phone", "");
    }

    if (!formData.checked) {
      handleError("checked", "Please accept terms and policies.");
      err = true;
    } else {
      handleError("checked", "");
    }

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();

    setSwalProps({
      show: true,
      title: err
        ? "Please fix the errors and try again."
        : "Account created successfully!",
      icon: err ? "error" : "success",
      timer: 3000,
      toast: true,
      target: "body",
      showConfirmButton: false,
      didClose: () => setSwalProps({ show: false }),
    });

    if (!err) {
      setLoginOpen(false);
      setFormData({
        fullName: "",
        gender: "",
        email: "",
        phone: "",
        password: "",
        checked: false,
      });
      setError({});
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setLoginOpen(true)}>
        Open Sign Up Dialog
      </Button>

      <Dialog
        open={loginOpen}
        maxWidth="sm"
        PaperProps={{
          sx: { borderRadius: "10px", width: "900px", maxWidth: "110vw" },
        }}
      >
        <DialogContent
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={myImage}
              alt="Astrology"
              width="420"
              style={{ paddingRight: 10, objectFit: "cover" }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 10,
                height: "auto",
                paddingLeft: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    
                    fontWeight: 520,
                    color: "rgb(79, 79, 79)",
                    fontFamily: "Okra, Helvetica, sans-serif",
                    marginBottom: 10,
                  }}
                >
                  Sign Up
                </div>
                <div style={{ marginLeft: "auto", cursor: "pointer" }}>
                  <CloseIcon onClick={() => setLoginOpen(false)} />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <TextField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  required
                />

                <FormControl fullWidth margin="normal">
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup
                    row
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>

                <TextField
                  label="Email ID"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  required
                />

                <TextField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  required
                  error={!!error.phone}
                  helperText={error.phone}
                />

                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  required
                />

                <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
                  <Checkbox
                    checked={formData.checked}
                    onChange={handleCheckboxChange}
                  />
                  <Typography variant="body2">
                    I agree to the <b>Terms & Conditions</b>
                  </Typography>
                </div>
                {error.checked && (
                  <Typography color="error" variant="caption">
                    {error.checked}
                  </Typography>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Next
                </Button>
              </form>

              <div
                style={{
                  width: "95%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 0,
                    border: "0.1px solid #dcdcdc",
                    margin: "10px 10px 10px 10px",
                  }}
                ></div>

                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ color: "rgb(54, 54, 54)" }}>New to Astrologer?</div>
                  <div style={{ color: "red", cursor: "pointer", marginLeft: 10 }}>
                    Login
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div>
        
      </div>
    </>
  );
}
