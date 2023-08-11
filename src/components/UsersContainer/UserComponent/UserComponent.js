const UserComponent = ({user, setUserId, setUserName}) => {
    const {id, name, username} = user;
    return (
        <ul>
           <li>id: {id}</li>
           <li>name: {name}</li>
           <li>username: {username}</li>
            <button onClick={()=>{
                setUserId(id)
                setUserName(name)
            }}>
                Show posts</button>
        </ul>
    );
};

export {UserComponent};