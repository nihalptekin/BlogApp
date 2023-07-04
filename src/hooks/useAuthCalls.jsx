import axios from "axios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  commentSuccess,
  logoutSuccess
} from "../features/authSlice";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector(state => state.auth);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const login = async userInfo => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}/users/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
     navigate("/");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}/users/auth/logout/`, null, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/login");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed");
    }
  };


  const register = async userInfo => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}/users/register/`,userInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed");
    }
  };
  // const comments= async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.post(
  //       `${BASE_URL}/api/comments/`
  //     );
  //     dispatch(commentSuccess(data));
  //     toastSuccessNotify("Comment performed");
  //     // navigate("/detail");
  //   } catch (err) {
  //     dispatch(fetchFail());
  //     toastErrorNotify("Comment can not be performed");
  //   }; 
  // };

  return { login, register, logout};
};

export default useAuthCalls;
