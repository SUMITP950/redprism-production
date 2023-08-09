import React, { Component } from "react";
import Router from "./router";
import { ToastContainer } from "react-toastify";
import CircleLoader from "react-spinners/CircleLoader";

export default function App() {
  return (
    <>
      <div 
        id="loader"
        style={{
          height: "100vh",
          width:"100%",
          zIndex: 9999999,
          position: "fixed",
          backgroundColor: "#0000005e",
          justifyContent: "center",
          alignItems: "center",
          display: "none",
        }}
      >
        
    {/* <CircleLoader color="blue" /> */}
        
      </div>
      <ToastContainer
        theme="colored"
        style={{ zIndex: 9999999 }}
      ></ToastContainer>
      <Router />{" "}
    </>
  );
}
