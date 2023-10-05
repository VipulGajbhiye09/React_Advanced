import { useState, useCallback, useMemo } from 'react';
import { data } from './data';
import List from './List';
import slowFunction from './slowFunction';


const Example = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  //React.memo is a higher-order component (HOC) in React that allows you to memoize a component. This means that if the input props to the component have not changed,
  //the memoized component will return the same result from the previous render, instead of re-rendering. This can help improve performance by avoiding unnecessary render cycles.
  const value = useMemo(() => slowFunction(), []);
  console.log(value);

  const removePerson = useCallback(
    (id) => {
      console.log(people);
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default Example;
