import { useEffect, useState } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

 const fetchUser = async () => {
    try {
      const resp = await fetch(url);
      const user = await resp.json();
      // const { avatar_url, name, company, bio } = user;
      console.log(user);
      setUser(user);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false); //as loading is complete
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // don't place user JSX before loading or error
  
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error...</h2>;
  }
  //destructure properties
  const { avatar_url, name, company, bio } = user;

  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
  
};


export default MultipleReturnsFetchData;
