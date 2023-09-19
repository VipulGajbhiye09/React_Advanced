import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  // while fetching data
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {

      // execute some logic like fetching data

      setIsLoading(false);

    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <h2>My App</h2>;
};
export default MultipleReturnsBasics;
