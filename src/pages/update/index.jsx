import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate, useSearchParams } from "react-router-dom";
import { updateArticle, getArticle } from "../../services/articles";
import { useSnackbar } from "notistack";
import MarkdownEditor from '../../components/Markdown/editor.jsx';

function Update() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const articleId = searchParams.get("id");

  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    language: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMarkdown = (value) => {
    if (!loading) {
      setFormData({ ...formData, content: value });
    }
  };

  const saveForm = () => {
    setLoading(true);
    updateArticle(formData)
      .then(() => {
        enqueueSnackbar("Artigo atualizado com sucesso!", {
          variant: "success",
        });
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar(`Ocorreu um erro ao atualizar o artigo`, {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getArticle(articleId)
      .then((request) => {
        setFormData(request.data);
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

  return (<>
    {loading && <LinearProgress />}
    <Container maxWidth="lg" style={{ marginTop: 50 }}>
      <Stack
        component="form"
        sx={{ width: "100%" }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="title"
          name="title"
          label="Titulo do Artigo"
          value={formData.title}
          onChange={handleChange}
          size="small"
          disabled={loading}
          required
        />
        <TextField
          id="author"
          name="author"
          label="Autor"
          value={formData.author}
          onChange={handleChange}
          size="small"
          disabled={loading}
          required
        />
        <FormControl fullWidth size="small" required disabled={loading}>
          <InputLabel id="language-label">Idioma</InputLabel>
          <Select
            labelId="language-label"
            id="language"
            name="language"
            label="Idioma"
            value={formData.language}
            onChange={handleChange}
          >
            <MenuItem value="portuguese">Português</MenuItem>
            <MenuItem value="english">Inglês</MenuItem>
            <MenuItem value="spanish">Espanhol</MenuItem>
          </Select>
        </FormControl>
        <MarkdownEditor
          id="markdown-editor-update"
          name="content"
          value={formData.content}
          onChange={handleMarkdown}
          height={350}
        />
      </Stack>
      <Button
        style={{ marginTop: 15, float: "right" }}
        variant="contained"
        onClick={() => {
          saveForm();
        }}
      >
        Salvar
      </Button>
      <Button
        style={{ marginTop: 15, marginRight: 5, float: "right" }}
        variant="text"
        onClick={() => {
          navigate("/home");
        }}
      >
        Cancelar
      </Button>
    </Container>
  </>
  );
}

export default Update;
