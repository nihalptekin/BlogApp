import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
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
      {comments[0].map((comment) => (
        <Card key={comment.id} sx={{minWidth: 275, marginBottom: 10 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {comment.user}
            </Typography>
            {/* Yorum tarihini ve içeriğini göstermek isterseniz aşağıdaki satırları açabilirsiniz */}
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {new Date(comment.time_stamp).toLocaleString()} 
            </Typography>
            <Typography variant="body2">
              {comment.content}
            </Typography> 
          </CardContent>
        </Card>
      ))}
    </div>
  );
     
};

export default CommentCard;
