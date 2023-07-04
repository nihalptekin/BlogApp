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
import { useLocation } from "react-router-dom";
import CommentForm from "../components/blog/CommentForm";
import CommentCard from "../components/blog/CommentCard";



const Detail = () => {


  const location = useLocation();


  const [color, setColor] = useState(false);
  const [count, setCount] = useState(0);
  const [comment, setComment] =useState(false);

 

  const a=location.state.blog



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
      </Card>
      {comment && (
            <CommentCard />,
            <CommentForm />
          ) }
    </div>
  );
};

export default Detail;
