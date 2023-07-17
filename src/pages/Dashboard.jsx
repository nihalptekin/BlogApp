import useBlogsCalls from '../hooks/useBlogsCalls';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import useAuthCalls from '../hooks/useAuthCalls';


const Dashboard = () => {
  const { getBlogData } = useBlogsCalls();
  const { data } = useSelector(state => state.blog);
  const navigate=useNavigate();
  const [visibilityCount, setVisibilityCount ] =useState(0)
  const { login } = useAuthCalls();

  useEffect(() => {
     getBlogData()
  
  }, []);

  

 
  const handleVisibility=()=>{
    setVisibilityCount(visibilityCount+1)
  }



  return (
    <div >
      {data.map(a=>(
        <div > 
    <Card key={a.id} sx={{maxWidth:345, 
    m:4,
    p: 4,
    border:"solid",
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",}}>
          <CardMedia
            sx={{ height: 200 }}
            image={a.image}
            title="card image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {a.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {a.content.slice(0, 100)}...
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon/>
            </IconButton>
            <IconButton aria-label="share">
              <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton aria-label="share">
              <VisibilityIcon /> {visibilityCount}
            </IconButton>
            <Button size="small" variant='contained' onClick={ (login) ? ()=>navigate("/detail/" + a.id, {state:{a}})
  : navigate("/login")}> Read More </Button>
          </CardActions>
        </Card></div>
       
      ))}
  
        
    </div>
  );
};

export default Dashboard;
