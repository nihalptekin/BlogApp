import { useDispatch, useSelector } from 'react-redux';
import useAxios from './useAxios';
import { getSuccess, fetchStart, fetchFail, postSuccess, getCategory, postUserBlog, getUserBlogSuccess } from '../features/blogSlice';
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify';
import { useNavigate } from 'react-router-dom';

const useBlogsCalls = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const {currentUser}= useSelector(state=>state.auth)


  const { axiosWithPublic, axiosWithToken } = useAxios();
  

  const getBlogData = async ()=> {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithPublic.get("api/blogs/");
      console.log(data);
      dispatch(getSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const postBlogData = async (info)=> {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("api/blogs/", info)
      toastSuccessNotify("Successfuly created!");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Not successfuly created!");
    }
  };

  const getUserBlogData = async ()=> {
    dispatch(fetchStart());
    try {
       const {data} = await axiosWithToken.get(`api/blogs/?author=${currentUser.id}`)
      dispatch(getUserBlogSuccess(data));

    } catch (error) {
      dispatch(fetchFail());
  
    }
  };

  const getCommentData = async (id)=> {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`/api/comments/${id}`);
      console.log(data);
      dispatch(getSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const PostCommentData = async (id)=> {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`/api/comments/${id}`);
      console.log(data);
      dispatch(postSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

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
      const { data } = await axiosWithToken.get(`/api/categories/${id}`, info);
      console.log(data);
      dispatch(getSuccess(data));
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
  
  
  return { getBlogData,getCommentData, getCategories, postCategories, postBlogData, getUserBlogData, deleteBlogData, putBlogData, PostCommentData};
};

export default useBlogsCalls;
