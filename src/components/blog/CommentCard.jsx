import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from 'moment'; // moment kütüphanesini içe aktarın
import useAuthCalls from '../../hooks/useAuthCalls';
import { useSelector } from 'react-redux';
import useBlogsCalls from '../../hooks/useBlogsCalls';



const CommentCard = ({handleSubmit}) => {

  // const [username, setUsername] = useState('');
  // const [userId, setUserId] = useState('');

    // const { comments } = useAuthCalls();



    // useEffect(() => {
    //     comments()
      
    //   }, []);

//   const formattedTime = moment().format('YYYY-MM-DD HH:mm:ss'); // tarih biçimini belirleyin

  return (
    <Card sx={{ minWidth: 275 }}>

       <CardContent>
        <Typography variant="h5" component="div">
       username
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {/* {formattedTime} formattedTime'ı kullanın */}
          {new Date().toLocaleString()} 
        </Typography>
        <Typography variant="body2">
        {handleSubmit}
        </Typography>
      </CardContent>
    
  
    </Card>
  );
};

export default CommentCard;
