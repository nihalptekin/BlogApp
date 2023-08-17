import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false, // const [loading,setLoading] = useState(false)
    error: false,
    token: null,
    // selectedImage: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true; // setLoading(true)
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user;
      state.token = payload?.key;
    },

    logoutSuccess: state => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
    },
    // prop drilling
  
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user;
      state.token = payload?.token;
      state.error = false;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    // setSelectedImage: (state, { payload }) => {
    //   state.selectedImage = payload; // Seçilen görüntüyü saklama
    // },
  },
});

export const {
  fetchStart,
  loginSuccess,
  registerSuccess,
  fetchFail,
  logoutSuccess,


} = authSlice.actions;
export default authSlice.reducer;

// async-thunk yerine manuel dispatclerle yapıyoruz. extra reducerlarla yapmadan da bu şekilde yapabiliyoruz. İki yönteminde avantajı ve dezavantajı var.
