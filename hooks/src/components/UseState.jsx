import { useContext } from "react";
import { ToggleTheme } from "../App";
import { useState } from "react";
import { useEffect } from "react";

function UseStateEffectContext(){
  const [like, updateLike] = useState(0);
  const [contentState, setContent] = useState(false);  

  useEffect(()=>{
    alert("Content Button Clicked");
  },[contentState])

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"grey":"pink",
    color:theme?"white":"black",
    padding:"6rem",
    margin:"6rem"
  }

  let updateContent=()=>{
    setContent((contentState) => !contentState );
    }
  let para=contentState?"Code is a powerful language that empowers humans to communicate instructions with machines, transforming abstract ideas into functional and tangible solutions.":""


  return(
    <div style={themeStyle}>
        <div>{para}</div>
        <button onClick={updateContent}> <span>Content</span> </button>
        <p>{like}</p>
        <button onClick={()=>updateLike(like=>like+1)}> <span>Like</span> </button>
    </div>
  )
}

export default UseStateEffectContext;