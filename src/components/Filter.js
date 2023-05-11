import React from "react";
import {
  Box,
  Typography,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@mui/material";

function Filter({ filterValue, filterType, setFilterType, setFilterValue }) {
  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleFilterValueChange = (event) => {
    setFilterValue(event.target.value);
  };
  return (
    <Box p={2}>
      <Typography variant="h6">Filter Users</Typography>
      <Box mt={2} display="flex" justifyContent="left">
        <Grid item xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterType}
              label="Filter Type"
              onChange={handleFilterTypeChange}
            >
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="username">Username</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="phone">Phone</MenuItem>
              <MenuItem value="website">Website</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Box px={2} />
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <TextField
              id="standard-basic"
              label="Filter Value"
              variant="standard"
              value={filterValue}
              disabled={!filterType}
              onChange={handleFilterValueChange}
            />
          </FormControl>
        </Grid>
      </Box>
    </Box>
  );
}

export default Filter;