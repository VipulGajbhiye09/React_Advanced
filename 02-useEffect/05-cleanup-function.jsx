import { useState,useEffect } from "react";

const CleanupFunction = () => {
  const [toggle,setToggle] = useState(false);

  //toggling component using short circuit operator
  //Leads to mounting & un-mounting of RandomComponent
  return (
    <div>
      <button className="btn" onClick={()=>{setToggle(!toggle)}}>Toggle Component </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

//This useEffect should run only on initial render due to empty dependency array but
//due to conditional rendering of component using && on every mount & unmount function in useEffect will be executed leading to data leak & background executiom
const RandomComponent=()=>{

  useEffect(()=>{
    console.log("hmm interesting behavior");
  },[]);

  return <h1>Random Component Content</h1>
}


export default CleanupFunction;
