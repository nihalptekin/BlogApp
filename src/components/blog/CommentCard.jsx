import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const CommentCard = ({handleChange}) => {

  const {currentUser}=(state=>state.auth)


  return (
    <Card sx={{ minWidth: 275 }}>

       <CardContent>
        <Typography variant="h5" component="div">
       {currentUser}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">

          {new Date().toLocaleString()} 
        </Typography>
        <Typography variant="body2">
        {handleChange}
        </Typography>
      </CardContent>
    
  
    </Card>
  );
};

export default CommentCard;
