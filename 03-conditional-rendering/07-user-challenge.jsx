import { useState } from "react";

const data={name:'vipul'}

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login =()=> {
    setUser(data.name);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>hello User : {user}</h2>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>please login</h3>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
