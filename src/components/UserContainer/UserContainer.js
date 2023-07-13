
import {UserComponent} from "./UserComponent/UserComponent";
import {useEffect, useState} from "react";

const UserContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users=> setUsers(users))
    },[])


    return (
        <>
            {users.map(user=> <UserComponent key={user.id} user={user}/>)}
        </>
    );
};

export {UserContainer};