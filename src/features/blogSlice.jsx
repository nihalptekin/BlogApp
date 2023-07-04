import { createSlice } from "@reduxjs/toolkit";


const blogSlice = createSlice({

    name:"blog", 

    initialState: {
            loading: false,
            error: false,
            data:[],    
            comments :[],
            categories:[],
            userBlog:[]
          
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
                state.comments=payload?.comments
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
          },
        });
 
        export const {
            fetchStart,
            fetchFail,
            getSuccess,
            getComments,
            getCategory,
            postSuccess,
            postUserBlog,
            getUserBlogSuccess,
     
          } = blogSlice.actions;

export default blogSlice.reducer;