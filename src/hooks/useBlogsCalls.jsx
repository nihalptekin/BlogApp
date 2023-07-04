import { useDispatch, useSelector } from 'react-redux';
import useAxios from './useAxios';
import { getSuccess, fetchStart, fetchFail, postSuccess, getCategory, postUserBlog, getUserBlogSuccess } from '../features/blogSlice';
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify';

const useBlogsCalls = () => {
  const dispatch = useDispatch();

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
      const {userBlog}= await axiosWithToken.post("api/blogs/", info)
      dispatch(postUserBlog(userBlog));
      toastSuccessNotify("Successfuly created!");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Not successfuly created!");
    }
  };

  // const putBlogData = async (info)=>{

  //   dispatch(fetchStart());
  //   try {
  //     await axiosWithToken.put(`api/blogs/${info.id}`, info)
  //     dispatch(putUserBlog(userBlog));
  //     toastSuccessNotify("Successfuly created!");
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify("Not successfuly created!");
  //   }
  
  // };

  const getUserBlogData = async ()=> {
    dispatch(fetchStart());
    try {
       const {userBlog} = await axiosWithToken.get(`api/blogs/?author=${currentUser.id}`)
      dispatch(getUserBlogSuccess(userBlog));

    } catch (error) {
      dispatch(fetchFail());
  
    }
  };

  const getCommentData = async ()=> {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`/api/comments/${currentUser.id}`);
      console.log(data);
      dispatch(getSuccess(data));
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



  return { getBlogData,getCommentData, getCategories, postCategories, postBlogData, getUserBlogData};
};

export default useBlogsCalls;
