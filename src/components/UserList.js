import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Grid,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";

function UserList({
  filteredUsers,
  setIsDialogOpen,
  setSelectedUser,
  setIsEdit,
}) {
  const handleViewUserClick = (user) => {
    setIsDialogOpen(true);
    setSelectedUser(user);
  };

  const handleEditUserClick = (e, user) => {
    e.stopPropagation();
    setSelectedUser(user);
    setIsEdit(true);
    setIsDialogOpen(true);
  };
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <List dense>
          {filteredUsers.map((user) => (
            <ListItem
              key={user.id}
              onClick={() => {
                handleViewUserClick(user);
              }}
              secondaryAction={
                <IconButton
                  onClick={(e) => {
                    handleEditUserClick(e, user);
                  }}
                >
                  <EditIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={user.name} secondary={user.email} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default UserList;