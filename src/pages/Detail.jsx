import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useLocation, useSearchParams } from "react-router-dom";
import CommentForm from "../components/blog/CommentForm";
import CommentCard from "../components/blog/CommentCard";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogsCalls from "../hooks/useBlogsCalls";



const Detail = () => {


  const location = useLocation();


  const [color, setColor] = useState(false);
  const [count, setCount] = useState(0);
  const [comment, setComment] =useState(false);

  const {currentUser}=useSelector(state=>state.auth)
  const {deleteBlogData}=useBlogsCalls();


 const a=location.state.a

  const handleClick = () => {
    setColor(!color);

    if (color===false) {
        setCount(count + 1);
      }

    else {setCount(count-1)}
    
  };

  const handleCommentClick =()=>{
    setComment(!comment); 
   
  
};



const handleUpdateBlog=()=>{

}

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={a.image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {a.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {a.content}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites" onClick={handleClick}>
            <FavoriteIcon   sx={{ color: color ? "red" : "inherit" }}
    /> {count}
          </IconButton>
            <IconButton aria-label="share" onClick={handleCommentClick}>
              <ChatBubbleOutlineIcon  />
            </IconButton>
          
          <IconButton aria-label="share">
            <VisibilityIcon/>
          </IconButton>
        </CardActions>
        {currentUser && (
  <>
    <Button variant="contained" onClick={handleUpdateBlog}>Update Blog</Button>
    <Button variant="contained" onClick={()=> deleteBlogData("userBlog", a.id )}>Delete Blog</Button>
  </>
)}
      </Card>
      {comment && (
            <CommentCard />,
            <CommentForm />
          ) }

         
    </div>
  );
};

export default Detail;