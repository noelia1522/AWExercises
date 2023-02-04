import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "grey" }} //margin-top/bot
            >
              Sign In
            </Button>
            <Grid container>
              {/* xs: If true, the grid item's width grows to use the space available in
              the grid container. The value is applied for all the screen sizes
              with the lowest priority. */}
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// import { response } from "express";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Container,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Link,
// } from "@mui/material";
// import { height } from "@mui/system";

// export default function Login() {
//   function handleSubmit(event: any) {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const email = data.get("email");
//     const password = data.get("password");
//   }

//   return (
//     <Container component="main" sx={{ maxWidth: "200px",  }}>
//       <Box>
//         <Typography component="h1" variant="h5">
//           {" "}
//           Sign in
//         </Typography>
//         <Box component="form">
//           <TextField
//             margin="normal"
//             required
//             // fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//           ></TextField>
//           <TextField
//             margin="normal"
//             required
//             // fullWidth
//             id="password"
//             label="Password"
//             name="password"
//             autoComplete="current-password"
//           ></TextField>
//           <Button
//             type="submit"
//             variant="contained"
//             onClick={(event) => {
//               handleSubmit(event);
//             }}
//           >
//             {" "}
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs={8}>
//               <Link href="/">Forgot password?</Link>
//             </Grid>
//             <Grid item xs={8}>
//               <Link href="/regist">{"Don't have an account? Sign Up"}</Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// // const navigate = useNavigate();
// // const [email, setEmail] = useState();
// // const [password, setPassword] = useState();
// // function submitHandler(event: any) {
// //   event.preventDefault();
// //   const requestOptions = {
// //     method: "POST",
// //     header: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ email, password }),
// //   };
// //   fetch("/users/login", requestOptions)
// //     .then((response) => response.json())
// //     .then((data) => {
// //       if (data.status !== 200) {
// //         // throw new Error(response.statusText)
// //       }
// //     });
// // }
// // return (
// //   <React.Fragment>
// //     <form>
// //       <h1> Login </h1>
// //       <label>
// //         Email:
// //         <input
// //           type="email"
// //           value={email}
// //           onChange={(e: any) => setEmail(e.target.value)}
// //         ></input>
// //       </label>
// //       <label>
// //         Password
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e: any) => setPassword(e.target.value)}
// //         ></input>
// //       </label>
// //       <button type="submit" onClick={submitHandler}>
// //         Login
// //       </button>
// //     </form>
// //   </React.Fragment>
// // );
