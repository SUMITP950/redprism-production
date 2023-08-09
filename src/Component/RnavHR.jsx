import React from "react";
import { Link } from "react-router-dom";

export default function RnavHR() {
  return (


<div class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"pink" ,justifyContent:"space-between"}}>
  <a class="navbar-brand" href="#">Logo</a>
   
  <div >
Alrady registered as a HR? 
  <Link to="/SigninAsHr"  style={{fontSize:20}}> Login</Link>
  </div>
</div>
 );
}