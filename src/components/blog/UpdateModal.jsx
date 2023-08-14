import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';
import { Button, Modal, Typography } from '@mui/material';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useBlogsCalls from '../../hooks/useBlogsCalls';


const UpdateModal = ({info, setInfo, open, handleClose}) => {
  const { getCategories, putBlogData } = useBlogsCalls();
  const { categories } = useSelector(state => state.blog);
  const navigate = useNavigate();


  useEffect(() => {
    getCategories("categories");
  }, []);

  const handleChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value }); 
  }; 

  const handleSubmit = e => {
    e.preventDefault();

    putBlogData(info);

    navigate("/my-blogs");
    handleClose();
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
    p: 4,
    justifyContent:"center",
    border:"3px solid orange",
    boxShadow: 24,
    background:"white"
  };

  return (
    <Modal
       open={open}
        onClose={()=> {
          handleClose();
        }}
    aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
    
     <Box sx={BoxStyle} >
      <Box component={"form"} onSubmit={handleSubmit}>
        <Box sx={flexStyle}>
          <Typography variant="h3" sx={{fontFamily: "monospace", color:"gray", textAlign:"center"}}>Update Blog</Typography>

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

          <Button sx={{background:"darkorange"}} type="submit" variant="contained">
            Update Blog
          </Button>
        </Box>
      </Box>
    </Box> 
    </Modal>
   
  );
};

export default UpdateModal;
