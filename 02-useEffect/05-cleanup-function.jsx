import { useState,useEffect } from "react";

const CleanupFunction = () => {
  const [toggle,setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={()=>{setToggle(!toggle)}}>Toggle Component </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent=()=>{
  return <h1>Random Component Content</h1>
}

export default CleanupFunction;
