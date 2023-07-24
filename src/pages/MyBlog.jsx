import React, { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import useBlogsCalls from '../hooks/useBlogsCalls';
import { getNewBlog, postSuccess } from '../features/blogSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { BorderAllRounded } from '@mui/icons-material';

const MyBlog = () => {

  const {userBlog} = useSelector(state => state.blog);
  const { getUserBlogData } = useBlogsCalls();

  const navigate= useNavigate();

  // const { info, setInfo } = location.state || {};

  useEffect(() => {
    getUserBlogData();
  }, []);

  return (
    <div sx={{  display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    BorderAllRounded:30,
    }}>
      {userBlog?.map(a => (
        <div sx={{flexBasis: "300px", justifyContent: "flex-end" }}>
        <Card sx={{ maxWidth: 345 , 
      p: 4,
      width: "300px",
      height: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent:"space-between"
     }} key={a.id}>
          <CardMedia sx={{ height: 240, objectFit: "contain" }} image={a.image} title={a.image} />
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
            <Button size="small" onClick={()=>navigate("/detail/" + a.id, {state:{a}})}>Read More</Button>
          </CardActions>
        </Card></div>
        
      ))}
    </div>
  );
};

export default MyBlog;
