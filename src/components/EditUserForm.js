import React from "react";
import { Typography, Grid, FormControl, TextField } from "@mui/material";

function EditUserForm({ user, updateUser }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Name:</Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Username:</Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Phone:</Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Email:</Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Website:</Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <TextField
            id="standard-basic"
            label="Website"
            variant="standard"
            name="website"
            value={user.website}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default EditUserForm;
