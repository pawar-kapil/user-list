import React from "react";
import { Typography, Grid } from "@mui/material";

function UserDetails({ user }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Name:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">{user.name}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Username:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">{user.username}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Phone:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">{user.phone}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Email:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">{user.email}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Website:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">{user.website}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Address:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">{`${user.address?.suite}, ${user.address?.street}, ${user.address?.city} - ${user.address?.zipcode}`}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Company:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">{user.company?.name}</Typography>
      </Grid>
    </Grid>
  );
}

export default UserDetails;
