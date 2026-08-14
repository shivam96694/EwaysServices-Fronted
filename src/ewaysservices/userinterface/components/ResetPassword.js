import { useState } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { postData } from "../../services/FetchApiServices";

export default function ResetPassword() {

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async () => {

    if(password.length < 6){
      Swal.fire("Password must be at least 6 characters");
      return;
    }

    if(password !== confirmPassword){
      Swal.fire("Passwords do not match");
      return;
    }

    const res = await postData("api/auth/reset-password",{
      email,
      password
    });

    if(res.success){

      Swal.fire({
        icon:"success",
        title:"Password Updated Successfully"
      });

      navigate("/");

    }else{

      Swal.fire({
        icon:"error",
        title:res.message
      });

    }

  }

  return (

    <Dialog
      open={true}
      maxWidth="sm"
      fullWidth
    >

      <DialogContent>

        <h2>Reset Password</h2>

        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="New Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{mt:2}}
          onClick={handleResetPassword}
        >
          Update Password
        </Button>

      </DialogContent>

    </Dialog>

  );

}