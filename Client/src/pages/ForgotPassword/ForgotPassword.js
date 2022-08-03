import React, {useState, useref} from 'react'
import ResetPassword from "../ResetPassword/ResetPassword";
import "./ForgotPassword.css";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [otpForm, setOtpForm] = useState("true");
    const handleChange = (e)=>{
        console.log(e.target);
        setEmail(e.target.value);
    }

    const SendEmailforForgotPassword = async(e)=>{
        const res = await fetch("http://localhost:8000/api/forgotpassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                email
            })
        });

        const data = await res.json();
        console.log(data)
        if(data.success){
            // naviagte("/password-sent-Page");
            window.alert(data.message);
            setOtpForm(false);
        }
        else{
            window.alert(data.message);
        }
    }
  return (
    <div className='ForgotPassword'>
        {otpForm? <div className='input-container'>
            <div className='heading-text'>
                <h1 style={{color: 'white'}}>Password Reset</h1>
                <p>
                    Enter your <strong>Muzix email address</strong> that you used to register. We'll send you an email with a link to reset your password.
                </p>
            </div>
            <form className='ForgotForm' method='POST'>
                <label>Enter email address</label>
                <input
            className="inputReset" 
                    id='forgotpasswordemail' 
                    key="forgotpasswordemail" 
                    name='email' 
                    placeholder='Email Address' 
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required/>
            </form>
            <button className='ForgotBtn' type='button' onClick={SendEmailforForgotPassword}>Submit</button>
        </div> : <ResetPassword email={email}/>}
    </div>
  )
}
