
import {UserComponent} from "./UserComponent/UserComponent";

import {useEffect, useState} from "react";

const UserContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => setUsers(users))
    },[])

    const handleClick = (value) => {
        alert(`User name is ${value}`)
    }


    return (
        <>
            {users.map((user) => {
                return (
                        <UserComponent
                            key={user.id}
                            user={user}
                            handleClick={handleClick}
                        />)
            })}
        </>)
};

export {UserContainer};