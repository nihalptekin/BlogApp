import React from "react";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
// import store from "./app/store";
import { ToastContainer } from "react-toastify";
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
