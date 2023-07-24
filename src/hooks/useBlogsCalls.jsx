import { useDispatch, useSelector } from 'react-redux';
import useAxios from './useAxios';
import { getSuccess, fetchStart, fetchFail,postLikeSuccess, postSuccess, getCategory, postUserBlog, getComments, getUserBlogSuccess, postComments} from '../features/blogSlice';
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const useBlogsCalls = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const {currentUser}= useSelector(state=>state.auth)
  const {comments}=useSelector(state=>state.blog)


  const { axiosWithPublic, axiosWithToken } = useAxios();
  

  const getBlogData = async ()=> {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithPublic.get("/api/blogs/");
      console.log(data);
      dispatch(getSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const postBlogData = async (info)=> {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/api/blogs/", info)
      toastSuccessNotify("Successfuly created!");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Not successfuly created!");
    }
  };


  const getUserBlogData = async ()=> {
    dispatch(fetchStart());
    try {
       const {data} = await axiosWithToken.get(`/api/blogs/?author=${currentUser.id}`)
      dispatch(getUserBlogSuccess(data));

    } catch (error) {
      dispatch(fetchFail());
  
    }
  };

  const postCommentData = async (commentId, comment) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/api/comments/${commentId}/`, comment);
      console.log("Yorum başarıyla gönderildi.");
    } catch (error) {
      console.error("Yorum gönderirken bir hata oluştu:", error);
      dispatch(fetchFail());
    }
  };

  const getCommentData = async (commentId) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`/api/comments/${commentId}/`);
      console.log("getcommentdata", data);
      dispatch(getComments(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  


  // const postLikeSuccess = async (id)=> {
  //   dispatch(fetchStart());
  //   try {
  //    await axiosWithPublic.post(`/api/comments/${id}`);
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };
  const getCategories = async ()=> {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get("/api/categories/");
      console.log(data);
      dispatch(getCategory(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postCategories = async (id, info)=> {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`/api/categories/${id}`, info);
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
    }
  };



  const deleteBlogData = async (id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`api/blogs/${id}/`);
      toastSuccessNotify("Blog successfully deleted!");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Blog deletion failed!");
    }
  };

  const putBlogData = async (info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`api/blogs/${info.id}/`, info);
      toastSuccessNotify("Blog successfully updated!");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Blog update failed!");
    }
  };
  
  
  return { getBlogData, getCategories, postCategories, postBlogData, getUserBlogData, deleteBlogData, putBlogData, postCommentData, getCommentData, postLikeSuccess };
};

export default useBlogsCalls;
