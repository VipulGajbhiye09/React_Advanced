import { useState } from 'react';
import {data} from './data.js'
//data has array of 4 objects with id and name property

const UserChallenge = () => {
  const [name, setName] = useState("")
  const [users, setUsers] = useState(data);

  const handleSubmit =(e)=>{
    e.preventDefault();
    //retruns for null input
    if(!name) return; 
    //generated unique id
    const new_id=Date.now();
    //created new object
    const newUser={id:new_id,name:name};
    //pushed new object to array
    const updatedUsers=[...users,newUser];

    //trigger re-render
    setUsers(updatedUsers);
    setName("");
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add User</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      
      {/* rendering users below the form */}
      <h2>[ Users ] </h2>
      
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
