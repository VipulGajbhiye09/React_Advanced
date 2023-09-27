import { useState, useEffect } from "react";

const url = "https://api.github.com/users";


const FetchData = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
      const getData = async () => {
        try {
          const resp = await fetch(url);
          const users = await resp.json();
          // console.log(users);
          setUsers(users);
        } catch (error) {
          console.log(error);
        }
      };
      getData()
    }
    ,[])


  return (
    <>
      <h2>GitHub Users</h2>
      <ul className="users">
        {users.map((userlist) => {
          const { id, avatar_url, html_url, login } = userlist;
          return (
            <>
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h5>{login}</h5>
                  <a href={html_url}>profile</a>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default FetchData;
