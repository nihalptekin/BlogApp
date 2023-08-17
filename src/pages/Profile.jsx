
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useAxios from '../hooks/useAxios';
import { useDispatch, useSelector } from 'react-redux';




const Profile = () => {
    const { axiosWithToken, } = useAxios();
    const [user, setUser]= useState("")
    const dispatch = useDispatch();
    const {currentUser}=useSelector(state=> state.auth)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

 
  useEffect(() => {
  const getUser = async () => {
    try {
        const { data } = await axiosWithToken.get(`/users/auth/user/`);
        dispatch(setUser(data)) 
    } catch (err) {
    }
  };
  getUser()
  }, [])




  return (
    <Card
    sx={{
        width: "20%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        p: 4,
        justifyContent: "center",
        border: "3px solid orange",
        boxShadow: 24,
    }}
>
    <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        alt="Selected Image"
        image={currentUser?.image}
    />

    <CardContent>
        <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
            {user.username}
        </Typography>

        <Typography
            sx={{ textAlign: "center", fontFamily: "sans-serif" }}
            variant="p"
            component="div"
        >
            {user?.email}
        </Typography>
    </CardContent>
</Card>
  );
};

export default Profile;