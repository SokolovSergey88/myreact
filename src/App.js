
import {createContext, useEffect, useState} from "react";
import {UserContainer} from "./components/UserContainer/UserContainer";

export const UserContext = createContext(null);
const App = () => {
    const [users, setUsers] = useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(users=>{
                setUsers(users)
            })
    },[]);

    const handleDelete = (id) => {
        setUsers([...users].filter((user)=> user.id !== id));
    };

    const handleClick = (value) => {
        alert(`user id is: ${value}`);
    };


  return (
      <UserContext.Provider value={{users, handleClick, handleDelete}}>
      <div>
            <UserContainer/>
      </div>
      </UserContext.Provider>
  );
};

export {App};
