import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useBlogsCalls from '../../hooks/useBlogsCalls';
import { useSelector } from 'react-redux';

const CommentCard = ({commentId}) => {
  const { getCommentData } = useBlogsCalls();
  const {comments} = useSelector((state) => state.blog);

  useEffect(() => {
    getCommentData(commentId);


  }, []);

  console.log("getcomment", comments);
 

  return (
    <div >
    <Grid sx={{display:"flex", justifyContent:"center",}}>
      {comments.length&&comments[0].map((comment) => (
       
        <Card key={comment.id} sx={{width:400, marginBottom:3,  flexDirection:"column" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {comment.user}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {new Date(comment.time_stamp).toLocaleString()} 
            </Typography>
            <Typography variant="body2">
              {comment.content}
            </Typography> 
          </CardContent>
        </Card>
      ))}
      </Grid>
    </div>
  );
     
};

export default CommentCard;
