import React from 'react'

const Person = (props) => {
    const {name,nickName,img_url}=props;
    return (
      <div>
        <h2>Name : {name}</h2>
        <h3>Nickname : {nickName}</h3>
        <img src={img_url}style={{ width: "50px" }} />
      </div>
    );
}

export default Person