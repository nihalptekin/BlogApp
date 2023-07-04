import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import useBlogsCalls from "../hooks/useBlogsCalls";
import { useNavigate } from "react-router-dom";
import { postBlogData, postSuccess } from '../features/blogSlice';

const NewBlog = () => {
  const { getCategories, postBlogData,} = useBlogsCalls();
  const { categories } = useSelector(state => state.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    title: "",
    image: "",
    category: "",
    status: "",
    content: "",
  });

  useEffect(() => {
    getCategories("categories");
  }, []);

  const handleChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });

  };


  console.log(info);


  const handleSubmit = e => {
    e.preventDefault();

     postBlogData("userBlog", info);

    navigate("/my-blogs");
    handleClose();
  };



  const handleClose = () => {
    setInfo({
      title: "",
      image: "",
      category: "",
      status: "",
      content: "",
    });
  };

  const flexStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: "400px",
  };

  const BoxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={BoxStyle}>
      <form onSubmit={handleSubmit}>
        <Box sx={flexStyle}>
          <Typography variant="h3">New Blog</Typography>

          <TextField
            id="title"
            label="Title"
            type="text"
            name="title"
            onChange={handleChange}
            value={info.title}
            multiline
            maxRows={4}
            required
          />

          <TextField
            id="image"
            label="image-URL"
            type="url"
            name="image"
            onChange={handleChange}
            value={info.image}
            multiline
            maxRows={4}
            required
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" required>
              Categories
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="category"
              value={info.category}
              label="Category"
              onChange={handleChange}
            >
              {categories?.map(category => (
                <MenuItem key={category.id} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" required>
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="category"
              name="status"
              value={info.status}
              label="Durum"
              onChange={handleChange}
              required
            >
              <MenuItem value="">Please choose</MenuItem>
              <MenuItem value="d">Draft</MenuItem>
              <MenuItem value="p">Published</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={2}
            placeholder="Add Comment"
            name="content"
            value={info.content}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="contained">
            New Blog
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default NewBlog;
