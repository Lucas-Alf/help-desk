import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSearchParams, useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import { getArticle } from "../../services/article";
import { useSnackbar } from "notistack";
import MarkdownViewer from '../../components/Markdown/viewer.jsx';

import Button from '@mui/material/Button';

function View() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const articleId = searchParams.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getArticle(articleId)
      .then((request) => {
        setArticle(request.data);
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar(`Ocorreu um erro ao buscar o artigo`, {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [articleId]);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <Container maxWidth="md" style={{ marginTop: 50, marginBottom: 50 }}>
          <Typography variant="h3" color="primary">
            {article.title}
          </Typography>
          <span>Por: {article.author} </span>
          <Button style={{ float: 'right', width: 20, height: 20 }} disableElevation variant="outlined" onClick={() => { navigate(`/update?id=${articleId}`); }}>Editar</Button>
          <div style={{ marginTop: 20 }}>
            <MarkdownViewer source={article.content} />
          </div>
        </Container>
      )}
    </>
  );
}

export default View;
