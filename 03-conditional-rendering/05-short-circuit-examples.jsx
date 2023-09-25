import { useState } from 'react';

const ShortCircuitExamples = () => {
  
  const [text, setText] = useState('');    // falsy
  const [name, setName] = useState('susan');    // truthy

  const [user, setUser] = useState({ name: 'john' }); // truthy
  const [isEditing, setIsEditing] = useState(false);  // falsy

  return (
    <div>
      {/* content inside element 
      if text is true return text else return default value*/}
      <h2>{text || 'default value'}</h2>
      
      {/* toggle element 
      if text is true return 2nd operand i.e. return div with h2 tags*/}
      {text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      
      {/* toggle component */}
      {user && <SomeComponent name={user.name} />}
      <h2> Toggle Component </h2>

      {/*using ternary operator inside element 
      returns 1st expression if true otherwise returns 2nd expression*/}
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      
      {/* toggle elements/components using ternary operator */}
      {user ? (
        <div>
          <h4>hello user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
      
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>hello there, {name}</h4>
      <button> log out</button>
    </div>
  );
};

export default ShortCircuitExamples;
