import React, { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography, Grid } from '@mui/material';
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
    <div sx={{}} >
      {userBlog?.map(a => (
        <Grid sx={{display:"flex", justifyContent:"center", paddingTop:5, }}>
        <Card sx={{ width: 500, 
      p: 4,
      height: "550px",
      display: "flex",
      flexDirection: "column",
      justifyContent:"center",
      border:"5px solid orange"
     }} key={a.id}>
          <CardMedia sx={{ height: 340, objectFit: "contain" }} image={a.image} title={a.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {a.title}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              {a.content}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {a.publish_date}
            </Typography>
          </CardContent>
          <CardActions >
           <Grid sx={{display:"inline-block"}}> 
           <AccountCircleIcon sx={{background:"white", color:"orange", }}/> {a.author}
           </Grid>
           
            <Grid sx={{display:"flex",}}>
            <IconButton sx={{color:"palevioletred"}}  aria-label="add to favorites">
            <FavoriteIcon  />
            </IconButton>

            <IconButton aria-label="share">
            <ChatBubbleOutlineIcon sx={{color:"palevioletred"}}/>
            </IconButton>

            <IconButton aria-label="share">
            <VisibilityIcon sx={{color:"palevioletred"}} />
            </IconButton>

            <Button size="small" sx={{background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', color:"white", height:"50px", width:"120px", marginLeft:"20px" }} onClick={()=>navigate("/detail/" + a.id, {state:{a}})}>Read More</Button>
            </Grid>
            
          </CardActions>
        </Card>
        </Grid>
      ))}
    </div>
  );
};

export default MyBlog;
