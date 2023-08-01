import { createSlice } from "@reduxjs/toolkit";


const blogSlice = createSlice({

    name:"blog", 

    initialState: {
            loading: false,
            error: false,
            data:[],    
            categories:[],
            userBlog:[],
            comments: [],
            detail: [],
            like: 0,

        }
          , 
          reducers: {
            fetchStart: state => {
              state.loading = true;
              state.error = false;
            },
            getSuccess: (state, action ) => {
                state.loading = false;
                state.data = action.payload; 
              },

              postSuccess: (state, action ) => {
                state.loading = false;
                state.data = action.payload; 
              },

              postUserBlog:(state, {payload}) =>{
                state.loading = false;
                state.userBlog = payload
              },

              getUserBlogSuccess:(state, {payload}) =>{
                state.loading = false;
                state.userBlog = payload
              },

              getLearnMore:(state, action)=>{
                state.loading =false; 
                state.data.id = action.payload.id; 

              }, 

              getComments:(state, {payload})=>{
                state.loading =false; 
                state.comments[0]=payload
              },

              getCategory:(state, action)=>{
                state.loading=false;
                state.categories=action.payload
                
              },

              postCategories:(state, action)=>{
                state.loading=false;
                state.categories=action.payload
              },

            fetchFail: state => {
              state.loading = false;
              state.error = true;
            },
            postLikeSuccess: (state, { payload }) => {
              state.loading = false;
              state.like = payload;
            },
          },
        });
 
        export const {
            fetchStart,
            fetchFail,
            getSuccess,
            getCategory,
            postSuccess,
            postUserBlog,
            getUserBlogSuccess,
            postComments,
            getComments, 
            postLikeSuccess
          
     
          } = blogSlice.actions;

export default blogSlice.reducer;