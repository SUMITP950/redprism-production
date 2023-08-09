import React from "react";
import { Link } from "react-router-dom";

export default function Rnav() {
  return (


<div class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"pink" ,justifyContent:"space-between"}}>
  <a class="navbar-brand" href="#">Logo</a>
   
  <div >
Alrady registered as a Job Seeker? 
  <Link to="/Signin" style={{fontSize:20}}> Login </Link>
  </div>
</div>
 );
}