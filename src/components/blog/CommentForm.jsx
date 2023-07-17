import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import useBlogsCalls from '../../hooks/useBlogsCalls';
import { useSelector } from 'react-redux';



const CommentForm = () => {
  const { getCommentData, PostCommentData } = useBlogsCalls();
  const { data } = useSelector(state => state.blog);
  // const [comment, setComment] = useState('');



useEffect(() => {
getCommentData()
}, [])

const handleSubmit = (e) => {
  e.preventDefault();
};


const handleChange=(e)=>{
  PostCommentData(e.target.value)

}

  return (
    <div>
    {handleSubmit ? 
    <CommentCard handleChange={handleChange}/> } :{  <Box component="form" onSubmit={handleSubmit}>
        <TextField
          sx={{ width: '750px', justifyContent: 'center' }}
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={2}
          placeholder="Add a comment"
          value={data.comments} // TextField değeri
          onChange={handleChange}
        />

        <Button variant="contained" sx={{ backgroundColor: 'orange' }} type="submit">
          ADD COMMENT
        </Button>
      </Box>} 

    
    </div>
  );
};

export default CommentForm;
