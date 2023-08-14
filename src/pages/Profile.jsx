import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useAxios from '../hooks/useAxios';
import { useDispatch } from 'react-redux';


const Profile = () => {
    const { axiosWithToken, axiosWithPublic } = useAxios();
    const [user, setUser]= useState("")
    const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const getUser = async () => {
    try {
        const { data } = await axiosWithToken.get(`/users/auth/user/`);
        dispatch(setUser(data)) 
    } catch (err) {
    }
  };
  useEffect(() => {
   getUser()
  }, [])


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <Card
      sx={{
        width: "10%",
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
        image={selectedImage}
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
           {user.email}
        </Typography>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
        >
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
            <Button variant="contained" component="span" sx={{}}>
              Upload Image
            </Button>
          </label>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Profile;
