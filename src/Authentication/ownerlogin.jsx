
import { LockOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import axiosInstance from "../api/axiosInstance"; 

const ownerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post("register/ownerlogin", {
        email,
        password,
      });
      localStorage.setItem("userhai", JSON.stringify(response.data));
      console.log("name",response.data.message)
      const val  = response.data.message;
      
      navigate(`/dashboardshelter/${val}`);
    } catch (error) {
      console.error(error);
      alert(error.response?.data.message || "Login failed, please try again.");
    }
  };

  return (
    <>
      <Container className="hello" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="hello"
        >
          <Avatar
            sx={{ m: 1, bgcolor: "#000000", width: "70px", height: "70px" }}
          >
            <LockOutlined sx={{ fontSize: "50px" }} />
          </Avatar>
          <Typography variant="h4">Login Owner</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#4DB6AC",
                  },
                },
                "& label.Mui-focused": {
                  color: "#000000",
                },
              }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#4DB6AC",
                  },
                },
                "& label.Mui-focused": {
                  color: "#000000",
                },
              }}
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                fontSize: "20px",
                backgroundColor: "#000000",
                color: "#fff",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Grid container justifyContent={"flex-center"}>
              <Grid item>
                <Link to="/ownersignup">
                  Don't have an account?{" "}
                  <span className="text-teal-600">Sign-Up</span>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ownerLogin;
