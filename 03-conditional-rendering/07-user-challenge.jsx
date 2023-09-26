import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <div>
          <h2> Truthy Return </h2>
        </div>
      ) : (
        <div>
          <h3>Falsy Return</h3>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
