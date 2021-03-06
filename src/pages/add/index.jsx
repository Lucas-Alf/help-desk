import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";
import { addArticle } from "../../services/article";
import { useSnackbar } from "notistack";
import MarkdownEditor from '../../components/Markdown/editor.jsx';
import { getCategoryList } from "../../services/category";


function Add() {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCategoryList().then((request) => {
      setCategories(request.data)
    })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar(`Ocorreu um erro ao adicionar o artigo`, {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    categoryId: null,
    language: "",
    content: "# Titulo \nConteúdo do artigo...",
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
    addArticle(formData)
      .then((request) => {
        if (request.data.success === false) {
          throw new Error(request.data.message);
        } else {
          enqueueSnackbar("Artigo adicionado com sucesso!", {
            variant: "success",
          });
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar(`Ocorreu um erro ao adicionar o artigo`, {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
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
          <FormControl fullWidth size="small" required disabled={loading}>
            <InputLabel id="category-label">Categoria</InputLabel>
            <Select
              labelId="category-label"
              id="categoryId"
              name="categoryId"
              label="Categoria"
              value={formData.categoryId}
              onChange={handleChange}
            >
              {categories.map((x) => (
                <MenuItem key={x.id} value={x.id}>{x.description}</MenuItem>
              ))}
            </Select>
          </FormControl>
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
            id="markdown-editor-add"
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

export default Add;
