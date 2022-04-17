import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import { getArticle } from "../../services/articles";
import { useSnackbar } from "notistack";
import MDEditor from "@uiw/react-md-editor";

function View() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const articleId = searchParams.get("id");

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <span>Por: {article.author}</span>
          <div data-color-mode="light" style={{ marginTop: 20 }}>
            <div className="wmde-markdown-var">
              <MDEditor.Markdown source={article.content} />
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default View;
