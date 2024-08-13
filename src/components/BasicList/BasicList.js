import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

export default function BasicList() {
    const navigate = useNavigate();

    const onClickBtn = () => {
        navigate("/wordslist");
    }
 
  return (
    <Box sx={{ width: "100%", maxWidth: 800, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={onClickBtn}>
              <ListItemText primary="금융 용어" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={onClickBtn}>
              <ListItemText primary="증권 용어" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </nav>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={onClickBtn}>
              <ListItemText primary="부동산 용어" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </nav>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={onClickBtn}>
              <ListItemText primary="글로벌 경제 용어" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </nav>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={onClickBtn}>
              <ListItemText primary="채권 용어" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
