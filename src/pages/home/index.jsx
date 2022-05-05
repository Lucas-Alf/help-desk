import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SupportIcon from '@mui/icons-material/Support';
import { Card, Grid, CardContent } from "@mui/material";
import styles from './styles.module.css'

function Home() {
  const categories = [
    { id: 1, title: 'ReactJS', subtitle: '103 tópicos' },
    { id: 2, title: 'Vue.js', subtitle: '83 tópicos' },
    { id: 3, title: 'Vite', subtitle: '42 tópicos' },
    { id: 4, title: 'C#', subtitle: '108 tópicos' },
    { id: 5, title: 'Java', subtitle: '-1 tópicos' },
    { id: 6, title: 'Go', subtitle: '78 tópicos' }
  ]

  return (
    <>
      <Container maxWidth="md" style={{ marginTop: 50, marginBottom: 50 }}>
        <div className={styles.centerDiv}>
          <SupportIcon color="primary" style={{ fontSize: 45, marginRight: 10 }} />
          <Typography variant="h3" color="primary">
            Help Desk
          </Typography>
        </div>
        <span style={{ textAlign: 'center', display: 'block' }}>
          Fazer página bonitinha de boas vindas aqui...
        </span>
        <Grid container spacing={3} style={{ marginTop: 30 }}>
          {categories.map(x => (
            <Grid key={x.id} item lg={4} sm={6} xs={12}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" color="primary" component="div">
                    {x.title}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {x.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
