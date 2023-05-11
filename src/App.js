import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import "./App.css";
import UserDetails from "./components/UserDetails";
import EditUserForm from "./components/EditUserForm";
import Filter from "./components/Filter";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleClose = () => {
    setIsDialogOpen(false);
    setIsEdit(false);
  };

  const handleUserUpdate = () => {
    const updatedUsers = [...users];
    const objIndex = updatedUsers.findIndex(
      (existing) => existing.id === selectedUser.id
    );
    updatedUsers[objIndex] = selectedUser;

    setUsers(updatedUsers);
    setIsDialogOpen(false);
    setIsEdit(false);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFilteredUsers(
      filterValue
        ? users.filter((user) => user[filterType].startsWith(filterValue))
        : users
    );
  }, [filterType, filterValue, users]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Filter
          filterType={filterType}
          filterValue={filterValue}
          setFilterType={setFilterType}
          setFilterValue={setFilterValue}
        />
      </Grid>
      <Grid item xs={6}>
        <Box p={2}>
          <Typography variant="h6">Users</Typography>
          {filteredUsers && filteredUsers.length > 0 ? (
            <UserList
              filteredUsers={filteredUsers}
              setIsDialogOpen={setIsDialogOpen}
              setIsEdit={setIsEdit}
              setSelectedUser={setSelectedUser}
            />
          ) : filterValue ? (
            <Typography variant="span">
              No users found for the applied filter criteria!
            </Typography>
          ) : (
            <Typography variant="span">No users found!</Typography>
          )}
        </Box>
      </Grid>

      <Dialog
        open={isDialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {isEdit ? "Edit User" : "User Details"}
        </DialogTitle>
        <DialogContent>
          {isEdit ? (
            <EditUserForm user={selectedUser} updateUser={setSelectedUser} />
          ) : (
            <UserDetails user={selectedUser} />
          )}
        </DialogContent>
        {isEdit ? (
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleUserUpdate}>Save</Button>
          </DialogActions>
        ) : null}
      </Dialog>
    </Grid>
  );
}

export default App;
