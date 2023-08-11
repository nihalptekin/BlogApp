import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import CommentForm from "../components/blog/CommentForm";
import CommentCard from "../components/blog/CommentCard";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogsCalls from "../hooks/useBlogsCalls";
import UpdateModal from "../components/blog/UpdateModal";
import useAxios from '../hooks/useAxios';




const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [color, setColor] = useState(false);
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);
  const { deleteBlogData, postLikeSuccess } = useBlogsCalls();
  const [visibilityCount, setVisibilityCount] = useState(0);
  const { axiosWithToken } = useAxios();

  const a = location.state.a;

  const {id}=useParams()
  console.log(id);


  const getDetailData = async (id) => {
    try {
      const { data } = await axiosWithToken.get(`/api/blogs/${id}/`);
      setDetailData(data)
    } catch (error) {

    }
  };

  useEffect(() => {
   getDetailData(id)
  }, [])
  

  const [detailData, setDetailData] = useState("");

  const [icerik, setIcerik] = useState(a);


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  
  const handleClose = () => {
    setOpen(false);
    setIcerik({
      title: "",
      currentUser: "",
      content: "",
      image: "",
      likes: 0,
    });
  };

  const handleLikeClick = () => {
    postLikeSuccess(id, getDetailData); // a.id'yi postLikeSuccess fonksiyonuna gönderiyoruz
   
  };

  const handleCommentClick = () => {
    setComment(!comment);
  };


  return (
    <div>
    <Grid sx={{display:"flex", justifyContent:"center", p:6}}>  
     {detailData && <Card sx={{ width: 700, 
      p: 4,
      height: "600px",
      display: "flex",
      flexDirection: "column",
      border:"3px solid orange" }}>
        <CardMedia sx={{ height: 440, objectFit: 'cover'  }} image={detailData?.image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {detailData?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{overflowY: 'scroll',height:100 }}>
            {detailData?.content}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
            <FavoriteIcon sx={{ color: detailData?.likes_n.some(item=>item.user_id==currentUser.id) ? "red" : "palevioletred" }} />{" "}
            <Typography variant="h5">{detailData?.likes}</Typography>
          </IconButton>

          <IconButton aria-label="share" onClick={handleCommentClick}>
            <ChatBubbleOutlineIcon sx={{color:"palevioletred"}} />
          </IconButton>

          <IconButton aria-label="share">
            <VisibilityIcon sx={{color:"palevioletred"}} /> {detailData?.post_views}
          </IconButton>
        </CardActions>
        {currentUser && (
          <Grid sx={{display:"flex", justifyContent:"center"}} >
            <Button variant="contained" 
             sx={{background:'darkorange', color:"white", height:"50px", width:"300px", marginLeft:"20px" }}
            onClick={handleOpen}>
              Update Blog
            </Button>
            <UpdateModal
              a={a}
              info={icerik}
              setInfo={setIcerik}
              open={open}
              handleClose={handleClose}
            />
            <Button
              variant="contained"
              sx={{background:'linear-gradient(45deg, #FE6B8B 100%, #FF8E53 90%)', color:"white", height:"50px", width:"300px", marginLeft:"20px" }}
              onClick={() => {
                deleteBlogData(a.id);
                navigate("/");
              }}
            >
              Delete Blog
            </Button>
          </Grid>
        )}
      </Card>}
      </Grid>
    
      {comment && (
        <>
        
          <CommentForm
            commentId={a.id}
            setComment={setIcerik}
            comment={a}
          />
        </>
      )}
    </div>
  );
};

export default Detail;
