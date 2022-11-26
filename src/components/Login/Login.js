import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

const Login = () => {
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {" "}
            Login
          </Typography>
          <TextField
            type={"text"}
            variant="outlined"
            placeholder="Name"
          ></TextField>
          <TextField
            type={"email"}
            variant="outlined"
            placeholder="Email"
          ></TextField>
          <TextField
            type={"password"}
            variant="outlined"
            placeholder="Password"
          ></TextField>
          <Button>Login</Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
