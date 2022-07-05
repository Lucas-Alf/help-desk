import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useSearchParams } from "react-router-dom";
import { getArticleList } from "../../services/article";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");

  const renderArticles = () => {
    setLoading(true);
    getArticleList(query)
      .then((request) => {
        setArticles(request.data);
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar(`Ocorreu um erro ao buscar os artigos`, {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    renderArticles(query);
  }, [query]);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <Container maxWidth="md" style={{ marginTop: 20 }}>
          {articles.length > 0 ? (
            <List>
              {articles.map((x) => (
                <ListItem
                  key={x.id}
                  alignItems="flex-start"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/view?id=${x.id}`);
                  }}
                >
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
                            dangerouslySetInnerHTML={{
                              __html: `${x.headline}...`,
                            }}
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

export default Search;
