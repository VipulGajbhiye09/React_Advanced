import avatar from "/assets/default-avatar.svg";
import Person from "./Person";
import { people } from "data.js";

const List = () => {
  return (
    <div>
      {people.map((people) => {      //Array method map 
        const { id, name, nickName, images } = people; //js optional chaining
        const url = images?.[0]?.small?.url || avatar;  //short circuit
        return (
          <Person key={id} name={name} nickName={nickName || '----'}  img_url={url} />
        );
      })}
    </div>
  );
};

export default List;
