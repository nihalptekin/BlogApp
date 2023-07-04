import React, { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import useBlogsCalls from '../hooks/useBlogsCalls';
import { getNewBlog, postSuccess } from '../features/blogSlice';
import { useNavigate } from 'react-router-dom';

const MyBlog = () => {

  const {userBlog} = useSelector(state => state.blog);
  const { getUserBlogData } = useBlogsCalls();

  const navigate= useNavigate();

  useEffect(() => {
    getUserBlogData();
  }, []);

  return (
    <div >
      {userBlog?.map(a => (
        <Card sx={{ maxWidth: 345 }} key={a.id}>
          <CardMedia sx={{ height: 140 }} image={a.image} title={a.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {a.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {a.content}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {a.publish_date}
            </Typography>
          </CardContent>
          <CardActions>
            <AccountCircleIcon /> {a.author}
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton aria-label="share">
              <VisibilityIcon />
            </IconButton>
            <Button size="small" onClick={()=> navigate("/detail/" + a.id, {state:{a}})}>Read More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default MyBlog;
