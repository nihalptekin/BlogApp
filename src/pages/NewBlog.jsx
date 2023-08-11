import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import useBlogsCalls from "../hooks/useBlogsCalls";
import { useNavigate } from "react-router-dom";


const NewBlog = () => {
  const { getCategories, postBlogData} = useBlogsCalls();
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

     postBlogData(info);

    navigate("/my-blogs");
    handleClose();
  };



  const handleClose = () => {
    setInfo({
      name: "",
      phone: "",
      image: "",
      address: "",
    });
  };

  console.log("categoryinfo", info);

  
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
    p: 4,
    justifyContent:"center",
    border:"3px solid orange",
    boxShadow: 24,
  
  };

  return (
    <Box sx={BoxStyle}>
      <form onSubmit={handleSubmit}>
        <Box sx={flexStyle}>
          <Typography variant="h3" sx={{textAlign:"center", fontFamily: "monospace", color:"gray"}}>New Blog</Typography>

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
                <MenuItem key={category.id} value={category.id}>
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
              label="Status"
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

          <Button sx={{background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}} type="submit" variant="contained">
            New Blog
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default NewBlog;
