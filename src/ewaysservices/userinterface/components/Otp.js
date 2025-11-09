import { DialogContent,Dialog,DialogActions, Button, TextField } from "@mui/material";
import { useState,useEffect } from "react";
import OtpInput from 'react-otp-input';
import { generateOtp,postData } from "../../services/FetchApiServices";
import { useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
export default function Otp({setOtpOpen,otpOpen,setOtpValue,otpValue,setUserData,userData,setStatusScreen,statusScreen}){
         const [isTimerRunning, setIsTimerRunning] = useState(false);
         const [timeLeft, setTimeLeft] = useState(30);
         const [otp,setOtp]=useState('')
         
         const handleCloseDialog=()=>{
            setOtpOpen(false)
             resetTimer('');
             setOtp('')
        }
         var dispatch=useDispatch()

  const submitUserData=async()=>{
            var response=await postData('userinterface/submit_user',userData)
            if(response.status)
            {   
            dispatch({type:'ADD_USER',payload:userData})
            setOtpOpen(false)
             resetTimer('');
             setOtp('')
            }
           else
           {
            alert(response.message)
           } 
          
       }
      const handleOtpChange=async (newValue)=>{
        setOtp(newValue)

        if(newValue.length==6)
        {alert(newValue+","+otpValue)
            if (newValue == otpValue) {
  alert('OTP Verified');

  // ✅ Update user state in parent (so header updates)
  setUserData({
    username: userData.username,
    email_id: userData.email_id,
    mobileno: userData.mobileno,
  });

  if (statusScreen === "SignUp") {
  submitUserData();
    setUserData({});
    await submitUserData(); // still send to backend
  } else {
    dispatch({ type: "ADD_USER", payload: userData });
  }

  // ✅ Reset dialog + timer
  setOtpOpen(false);
  resetTimer("");
  setOtp("");
}
else
                {alert("Invalid Otp")}
            
            }
      }
 const renderInput = (inputProps, index) => (
        <input
            {...inputProps}
            style={{
                width: '3rem',
                height: '3rem',
                margin: '0 0.5rem',
                fontSize: '1rem',
                borderRadius: '10px',
                border: '1px solid #ccc',
                textAlign: 'center'
            }}
        /> 
    );

    
    const startTimer = () => {
        setTimeLeft(30);
        setIsTimerRunning(true);
        setOtp('')
    };

    const resetTimer = () => {
        setIsTimerRunning(false);
        setTimeLeft(30);
    };

    useEffect(() => {
        let interval;
        if (isTimerRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsTimerRunning(false);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return(
        <Dialog open={otpOpen}   PaperProps={{ sx: { borderRadius: "10px",width:'65%',height:'auto' } }} onClose={handleCloseDialog}>
<DialogContent style={{display:'flex',justifyContent:'center',alignItems:'center',margin:0,padding:0}}>
<div style={{display:'flex',flexDirection:'column',borderRadius:10,width:'90%',height:'auto'}} >

<div style={{width:'100%',display:'flex',alignItems:'center'}}>

<div style={{fontSize:'2rem',lineHeight:'4rem',margin:'1.5rem 0px',fontWeight:520,color:' rgb(79, 79, 79)',fontFamily:'Okra, Helvetica, sans-serif' }}>
OTP Verification
</div >

<div  style={{marginLeft:'auto',cursor:'pointer'}} >
<CloseIcon onClick={handleCloseDialog} />
</div>

</div>

<div style={{marginBottom:20,display:'flex',justifyContent:'center',color:'gray'}}>
  Check text messages for your OTP  
</div>

<div style={{display:'flex',justifyContent:'center'}}>
    <OtpInput
  value={otp}
  onChange={handleOtpChange}
  numInputs={6}
  renderInput={renderInput}
  separator={<span style={{ margin: '0 0.5rem' }}>-</span>}
  
/>
</div>
  <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                marginTop: '20px',
                gap: '10px',
                marginBottom:10
                
            }}>
                {isTimerRunning ? (
                    <span style={{ color: 'gray' }}>Resend OTP in {formatTime(timeLeft)}</span>
                ) : (
                    <Button 
                        variant="text" 
                        onClick={startTimer}
                        style={{ color: 'red', textTransform: 'none' }}
                    >
                        Resend OTP
                    </Button>
                )}
            </div>

</div>
</DialogContent>
        </Dialog>
    )
}