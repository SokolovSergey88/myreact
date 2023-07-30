import {UserComponent} from "../UserComponent/UserComponent";
import {useContext} from "react";
import {UserContext} from "../../App";

const UserContainer = () => {
    const {users} = useContext(UserContext);
    return (
        <>

            {users?.map((user, id) => {

                return (
                    <UserComponent
                    key={id}
                    user={user}
                    />)
            })}

        </>
    );
};

export {UserContainer};