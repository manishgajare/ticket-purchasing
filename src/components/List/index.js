import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const DList = ({ data }) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {data.map((show, idx) => {
        return (
          <div key={idx}>
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <Button
                  component={Link}
                  to={{ pathname: `/${show.id}` }}
                  sx={{ textTransform: "none" }}
                  variant="contained"
                >
                  See Tickets
                </Button>
              }
            >
              <ListItemAvatar sx={{ marginRight: "25px" }}>
                <Avatar
                  sx={{ width: 75, height: 75 }}
                  alt={show.name}
                  src={show.image}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="h6"
                    color="text.primary"
                  >
                    {show.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {new Date(show.date).toDateString()}, {show.time}
                    </Typography>
                    <br />
                    {`${show.venue} — ${show.location}`}
                  </>
                }
              />
            </ListItem>

            <Divider variant="middle" component="li" />
          </div>
        );
      })}
    </List>
  );
};

export default DList;
