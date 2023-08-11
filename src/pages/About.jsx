import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import panda from "../assest/panda-19915.png";

export default function About() {
  return (

       <Card sx={{ maxWidth:400,
       height:350,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        p: 4,
        justifyContent: "center",
        border: "3px solid orange",
        boxShadow: 24,
      }}>
      
      <CardMedia sx={{witdh:200, height:200, objectFit: "contain",}} component="img" alt="Panda" image={panda} />
     

      <CardContent>
        <Typography variant="h6" component="div">
          Hi! Welcome to my Project 😇
          </Typography>

          <Typography sx={{textAlign:"center", fontFamily:"sans-serif" }}  variant="p" component="div">
          My name is Nihal Tekin
          <br></br>
          I am a Fullstack developer
          </Typography>

          <Typography sx={{textAlign:"center"}}>
          Connect with me 
          </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center", marginTop:-3 }}>
        <Link
          href="https://www.linkedin.com/in/nihaltekin/"
          target="_blank"
          rel="noopener"
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            component="img"
            size="small"
            src="https://user-images.githubusercontent.com/88904952/234979284-68c11d7f-1acc-4f0c-ac78-044e1037d7b0.png"
            alt="linkedin"
            sx={{width:40}}
          />
    
        </Link>
        <Link
          href="mailto:nihalpolattekin@gmail.com" 
          target="_blank"
          rel="noopener"
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            component="img"
            size="small"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrazA7E7S5sKplWMd_XDqjn30RzOFjqnGuJQ&usqp=CAU"
            alt="email"
            sx={{width:70}}
          />
    
        </Link>
      </CardActions>
    </Card>

   
  );
}
