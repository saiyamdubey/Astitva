import React, { useState } from "react";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined } from "@mui/icons-material";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to validate email format
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Function to validate password (min 6 characters)
  const isValidPassword = (password) => password.length >= 6;

  const handleSendOtp = async () => {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://astitva-backend.onrender.com/api/send-otp", { email });
      alert(response.data.message);
      setOtpSent(true);
    } catch (error) {
      alert(error.response?.data?.error || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!isValidPassword(password)) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    
    try {
      setLoading(true);
      const response = await axios.post("https://astitva-backend.onrender.com/api/register", {
        name,
        email,
        password,
        otp,
      });
      // localStorage.setItem('userhai', JSON.stringify(response));
      // alert(response.data.message);
      // navigate("/dashboard");
      // const data = await response.json();

        // Store user data in local storage
        localStorage.setItem('userhai', JSON.stringify(response));

        console.log("Registration Success:", response.data.message);

        // Navigate to dashboard with the returned message
        navigate(`/dashboard/${response.data.message}`);
    } catch (error) {
      alert(error.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box sx={{ mt: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar sx={{ m: 1, bgcolor: "#000000", width: "70px", height: "70px" }}>
          <LockOutlined sx={{ fontSize: "50px" }} />
        </Avatar>
        <Typography variant="h4">Sign Up</Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            {!otpSent && (
              <Grid item xs={12}>
                <Button  fullWidth variant="contained" sx={{ mt: 2, mb: 1, fontSize: "20px", backgroundColor: "#000", color: "#fff" }} onClick={handleSendOtp} disabled={loading}>
                  {loading ? "Sending OTP..." : "Send OTP"}
                </Button>
              </Grid>
            )}
            {otpSent && (
              <>
                <Grid item xs={12}>
                  <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: "#4DB6AC" }} onClick={handleRegister} disabled={loading}>
                    {loading ? "Signing Up..." : "Sign Up"}
                  </Button>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
                  <Button variant="text" onClick={handleSendOtp} disabled={loading}>
                    Resend OTP
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Grid item>
              <Link to="/login" style={{ textDecoration: "none", color: "#4DB6AC" }}>
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
