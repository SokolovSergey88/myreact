const User = ({user}) => {
    const {id, name, username, email, address:{street, city}} = user;
    return (
        <div>
            <h3> id: {id}</h3>
            <h3> name: {name}</h3>
            <h3> username: {username}</h3>
            <h3> email: {email}</h3>
            <h3> street: {street}</h3>
            <h3> city: {city}</h3>
            <hr/>
        </div>
    );
};

export {User};