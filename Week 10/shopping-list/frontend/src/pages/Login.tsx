import { response } from "express";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import { height } from "@mui/system";

export default function Login() {
  function handleSubmit(event: any) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Typography component="h1" variant="h5">
          {" "}
          Sign in
        </Typography>
        <Box component="form">
          <TextField
            margin="normal"
            required
            // fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          ></TextField>
          <TextField
            margin="normal"
            required
            // fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            {" "}
            Sign In
          </Button>
          <Grid container>
            <Grid item xs={8}>
              <Link href="/">Forgot password?</Link>
            </Grid>
            <Grid item xs={8}>
              <Link href="/regist">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

// const navigate = useNavigate();
// const [email, setEmail] = useState();
// const [password, setPassword] = useState();
// function submitHandler(event: any) {
//   event.preventDefault();
//   const requestOptions = {
//     method: "POST",
//     header: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   };
//   fetch("/users/login", requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.status !== 200) {
//         // throw new Error(response.statusText)
//       }
//     });
// }
// return (
//   <React.Fragment>
//     <form>
//       <h1> Login </h1>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e: any) => setEmail(e.target.value)}
//         ></input>
//       </label>
//       <label>
//         Password
//         <input
//           type="password"
//           value={password}
//           onChange={(e: any) => setPassword(e.target.value)}
//         ></input>
//       </label>
//       <button type="submit" onClick={submitHandler}>
//         Login
//       </button>
//     </form>
//   </React.Fragment>
// );
