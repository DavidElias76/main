
// Generate a OTP Code

import { useEffect, useState } from "react"

function OTPGenerator () {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

    function generateOtp() {
        const newOtp = Math.floor(100000 + Math.random() * 900000); // generate a random number with 6 digits
        setOtp(newOtp);
        setTimeLeft(10);
    }

    useEffect(() => {
        if (timeLeft === 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);

    }, [timeLeft]);

    return (
        <div className="container">
        <h1 id="otp-title">OTP Generator</h1>

        <h2 id="otp-display" aria-live="polite">{otp ? otp : "Click 'Generate OTP' to get a code"}</h2>

        <p id="otp-timer" aria-live="assertive">{timeLeft > 0 ? `Expires in: ${timeLeft} seconds`: otp ? "OTP expired. Click the button to generate a new OTP." : ""}</p>

        <button style={{backgroundColor: 'grey', padding: '10px', color: 'white'}} id="generate-otp-button" onClick={generateOtp} disabled={timeLeft > 0}>Generate OTP</button>
        </div>
  );
};



export {OTPGenerator}