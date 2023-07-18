import {useState} from "react";


const UserComponent = () => {

    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={handleClick}>You pressed me {count} times</button>
        </>
    )
}




export default UserComponent;