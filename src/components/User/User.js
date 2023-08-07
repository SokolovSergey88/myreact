const User = ({user, setUser}) => {
    const {id, name, username} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button onClick={()=> setUser({name, userId:id})}>show post</button>
        </div>
    );
};

export {User};