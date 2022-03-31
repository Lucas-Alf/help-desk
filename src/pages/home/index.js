import React from "react";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

function Home() {
  return (
    <>
      <Container maxWidth="sm">
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Pegunta 1"
              secondary={<>{"Texto da pergunta 1..."}</>}
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Pegunta "
              secondary={<>{"Texto da pergunta 2..."}</>}
            />
          </ListItem>
        </List>
      </Container>
    </>
  );
}

export default Home;
