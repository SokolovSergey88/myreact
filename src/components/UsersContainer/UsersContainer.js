import {useEffect} from "react";
import {UserComponent} from "./UserComponent/UserComponent";

const UsersContainer = ({users, setUsers, setUserId, setUserName}) => {


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(user=>setUsers(user))
    },[]);
    return (
        <div>
            {users.map(user=> < UserComponent key={user.id} user={user} setUserId={setUserId} setUserName={setUserName}/>)}
        </div>
    );
};

export {UsersContainer};