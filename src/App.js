import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
// import store from "./app/store";
import { ToastContainer } from "react-toastify";
 import store from "./app/store";



function App() {


  return (
    <>
   
     
        <Provider store={store}>
     
          <AppRouter />
    
        </Provider>
        <ToastContainer />
        <Footer />

    </>
  );
}

export default App;
