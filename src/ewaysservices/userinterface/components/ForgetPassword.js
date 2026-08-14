import { useState } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";
import { postData } from "../../services/FetchApiServices";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword({
  open,
  setOpen,
}) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [showOtp, setShowOtp] = useState(false);

  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {

  console.log("Button Clicked");

  if(email.trim()===""){
    Swal.fire({
      icon:"error",
      title:"Please enter email"
    });
    return;
  }
  console.log("Email:", email);
    setLoading(true);

    const res = await postData("api/auth/forgot-password",{
      email
    });
  console.log("Response:", res);

    setLoading(false);

    if(res.success){

      Swal.fire({
        title:"Development OTP",
        text:res.otp,
        icon:"success"
      });

      setShowOtp(true);

    }else{

      Swal.fire({
        icon:"error",
        title:res.message
      });

    }

  };



  const verifyOtp = async ()=>{

    if(otp.trim()===""){
      Swal.fire({
        icon:"error",
        title:"Enter OTP"
      })
      return;
    }

    const res = await postData("api/auth/verify-otp",{

      email,
      otp

    });

    if(res.success){

      Swal.fire({
        icon:"success",
        title:"OTP Verified"
      });

      setOpen(false);

      navigate("/reset-password",{
        state:{email}
      });

    }else{

      Swal.fire({
        icon:"error",
        title:res.message
      });

    }

  }

  return (

    <Dialog
      open={open}
      maxWidth="sm"
      fullWidth
    >

      <DialogContent>

        <div
          style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
          }}
        >

          <h2>Forgot Password</h2>

          <CloseIcon
            style={{cursor:"pointer"}}
            onClick={()=>setOpen(false)}
          />

        </div>


        <TextField

          fullWidth
          label="Enter Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          margin="normal"

        />


        {
          showOtp &&

          <TextField

            fullWidth

            label="Enter OTP"

            value={otp}

            onChange={(e)=>setOtp(e.target.value)}

            margin="normal"

          />

        }


        {
          !showOtp ?

          <Button

            fullWidth

            variant="contained"

            sx={{mt:2}}

            onClick={sendOtp}

            disabled={loading}

          >

            {
              loading ?

              "Sending OTP..."

              :

              "Send OTP"

            }

          </Button>

          :

          <Button

            fullWidth

            variant="contained"

            sx={{mt:2}}

            onClick={verifyOtp}

          >

            Verify OTP

          </Button>

        }


      </DialogContent>

    </Dialog>

  );

}