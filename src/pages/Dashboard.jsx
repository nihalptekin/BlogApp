import useBlogsCalls from '../hooks/useBlogsCalls';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
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
import { toastWarnNotify } from "../helper/ToastNotify";


const Dashboard = () => {
  const { getBlogData } = useBlogsCalls();
  const { data } = useSelector(state => state.blog);
  const navigate=useNavigate();
  // const [visibilityCount, setVisibilityCount ]=useState(0)
  const { login } = useAuthCalls();

  useEffect(() => {
     getBlogData()
  
  }, []);

  

  const logineGit=()=>{
     
      navigate("/login");
      toastWarnNotify("You must be logged in!");
      
  
  }

  const flexCenter = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  };

  return (
    <div >
    <Grid container sx={flexCenter} mt={4}>
      {data.map(a=>(
    <Card key={a.id} sx={{width: 300, 
      p: 4,
      height: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent:"center",
      border:"3px solid orange",
      
    
        }}>
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
          <CardActions sx={{marginTop:5,justifyContent:"space-between" }}>
          <div><IconButton aria-label="add to favorites">
              <FavoriteIcon sx={{color:"palevioletred"}} />
            </IconButton>
            <IconButton aria-label="share">
              <ChatBubbleOutlineIcon sx={{color:"palevioletred"}} />
            </IconButton>
            <IconButton aria-label="share">
              <VisibilityIcon sx={{color:"palevioletred"}}  /> 
            </IconButton></div>
            
         <div>
         <Button size="small" 
            sx={{background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', color:"white", height:"50px", width:"150px",  }}
             variant='contained'  
            onClick={(login) ? () => navigate("/detail/" + a.id, { state: { a} }) 
             : logineGit}> Read More </Button>
           </div>          
          </CardActions>
        </Card>
        
      ))}
      </Grid>  
    </div>
  );
};

export default Dashboard;
