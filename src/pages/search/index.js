import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useSearchParams } from "react-router-dom";
import { getList } from "../../services/articles";
import { withSnackbar } from "../../components/Snackbar";

function Home(props) {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");

  const renderArticles = () => {
    setLoading(true);
    getList(query)
      .then((request) => {
        if (request.status === 200) {
          setArticles(request.data);
        } else {
          props.snackbarShowMessage(
            `Ocorreu um erro ao buscar os artigos: ${request.status}`
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    renderArticles(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <Container maxWidth="sm" style={{ marginTop: 20 }}>
          {articles.length > 0 ? (
            <List>
              {articles.map((x) => (
                <ListItem key={x.id} alignItems="flex-start">
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography variant="h5" color="primary">
                        {x.title}
                      </Typography>
                    }
                    secondary={
                      <div>
                        <div>
                          <div
                            dangerouslySetInnerHTML={{ __html: x.headline }}
                          />
                        </div>
                        <div>
                          <Typography variant="body2">
                            Por: {x.author}
                          </Typography>
                        </div>
                      </div>
                    }
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography
              variant="h5"
              color="primary"
              style={{ textAlign: "center" }}
            >
              Nenhum artigo encontrado para a busca... 😭
            </Typography>
          )}
        </Container>
      )}
    </>
  );
}

export default withSnackbar(Home);
