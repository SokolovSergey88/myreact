import {Users} from "./Users/Users";
import {useState} from "react";
import {UserForm} from "./UserForm/UserForm";

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export {UserContainer};