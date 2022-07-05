import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SupportIcon from '@mui/icons-material/Support';
import { Card, Grid, CardContent, Skeleton } from "@mui/material";
import styles from './styles.module.css'
import { getCategoryList } from "../../services/category";
import { useSnackbar } from "notistack";

function Home() {

  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  const renderCategories = () => {
    setLoading(true);
    getCategoryList()
      .then((request) => {
        setCategoryList(request.data);
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar(`Ocorreu um erro ao buscar as categorias`, {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    renderCategories();
  }, []);

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
        {loading ?
          (
            <Grid container spacing={3} style={{ marginTop: 30 }}>
              <Grid item lg={4} sm={6} xs={12}>
                <Skeleton height={100} />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Skeleton height={100} />
              </Grid>
              <Grid item lg={4} sm={6} xs={12}>
                <Skeleton height={100} />
              </Grid>
            </Grid>
          )
          : (
            <Grid container spacing={3} style={{ marginTop: 30 }}>
              {categoryList.map(x => (
                <Grid key={x.id} item lg={4} sm={6} xs={12}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography variant="h5" color="primary" component="div">
                        {x.description}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        {x.count} tópicos
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )
        }

      </Container>
    </>
  );
}

export default Home;
