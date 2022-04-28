import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SupportIcon from '@mui/icons-material/Support';
import { Card, Grid, CardContent, CardMedia } from "@mui/material";
import styles from './styles.module.css'

function Home() {
  const categories = [
    { id: 1, subtitle: 'Front-end', title: 'ReactJS', img: 'https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png' },
    { id: 2, subtitle: 'Front-end', title: 'Vue.js', img: 'https://miro.medium.com/max/1200/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg' },
    { id: 3, subtitle: 'Front-end', title: 'Vite', img: 'https://miro.medium.com/max/1400/1*In1BgimeWvX8_9NjKwoY2w.png' },
    { id: 4, subtitle: 'Back-end', title: 'C#', img: 'https://www.bairesdev.com/wp-content/uploads/2021/07/Csharp.svg' },
    { id: 5, subtitle: 'Back-end', title: 'Java', img: 'https://s2.glbimg.com/q-0B1SbZWYgxxnLwsf6dbXgivj4=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/P/f/y52r4ySZWLkJjEhKLhgw/2014-11-14-java-logo.jpg' },
    { id: 6, subtitle: 'Back-end', title: 'Go', img: 'https://lh3.googleusercontent.com/6W7N9pvzlZM05HRuuWLRPauncfpq_dLxOaOri0ce9VLtl-Ez1mi7OttHbS9Yxj6drC3olgkvWOwoTstBDgz7Gp4yEoBL0hHJC537ZakzGiPUJ-rWB8Asm815J-_syqML7SMlIwZV' },
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
                <CardMedia
                  component="img"
                  height="140"
                  image={x.img}
                  alt={x.title}
                />
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {x.subtitle}
                  </Typography>
                  <Typography variant="h5" color="primary" component="div">
                    {x.title}
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
