import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <>
      <Container maxWidth="sm" style={{ marginTop: 50 }}>
        <Typography variant="h3" color="primary">
          Help Desk
        </Typography>
        <span>Fazer página bonitinha de boas vindas aqui...</span>
      </Container>
    </>
  );
}

export default Home;
