import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  MenuItem,
  Box
} from "@mui/material";
import api from "../services/api";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "PATIENT"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const register = async () => {
    try {
      await api.post("/api/auth/register", form);
      alert("Registration Successful");
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={5}
        sx={{
          p: 4,
          mt: 8,
          borderRadius: 4
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          Medico Registration
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>

          <TextField
            label="Full Name"
            name="name"
            fullWidth
            onChange={handleChange}
          />

          <TextField
            label="Email"
            name="email"
            fullWidth
            onChange={handleChange}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            onChange={handleChange}
          />

          <TextField
            select
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <MenuItem value="PATIENT">
              Patient
            </MenuItem>

            <MenuItem value="DOCTOR">
              Doctor
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            size="large"
            onClick={register}
          >
            Register
          </Button>

        </Box>
      </Paper>
    </Container>
  );
}

export default Register;