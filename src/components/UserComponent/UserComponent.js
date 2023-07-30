import {useContext} from "react";
import {UserContext} from "../../App";

const UserComponent = ({user}) => {
    const {handleClick, handleDelete} = useContext(UserContext);
    return (
        <div style={{width: '40%',
            border: '1px solid black',
            backgroundColor: 'yellowgreen',
            padding: '10px',
            marginBottom: '10px'
        }}>
            <h1>{user.name}</h1>
            <button onClick={()=>handleClick(user.name)}>Show me</button>
            <button onClick={()=> handleDelete(user.id)}>Delete</button>
        </div>
    );
};

export {UserComponent};