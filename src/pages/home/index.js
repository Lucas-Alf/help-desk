import React from "react";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Home() {
  var articles = [
    {
      id: 1,
      title: "Artigo 1",
      subtitle: "Texto do artigo ....",
    },
    {
      id: 2,
      title: "Artigo 2",
      subtitle: "Texto do artigo 2...",
    },
  ];

  return (
    <>
      <Container maxWidth="sm">
        <List>
          {articles.map((x) => (
            <ListItem key={x.id} alignItems="flex-start">
              <ListItemText primary={x.title} secondary={x.subtitle} />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}

export default Home;
