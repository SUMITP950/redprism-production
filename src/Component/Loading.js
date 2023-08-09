import React from 'react'
import FadeLoader from "react-spinners/FadeLoader";

const Loading = ({show}) => {
  return show && (
 <>
 <div style={{display:'flex', alignItems:'center', justifyContent:'center',height:'100vh'}}>
 <FadeLoader color="#36d7b7" />
 </div>
 
 
 </>
  )
}

export default Loading
