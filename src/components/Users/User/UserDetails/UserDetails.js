const UserDetails = ({user}) => {
    const {id,name,username,email,phone,website} = user;
    return (
        <div>
            <h3>id:{id}</h3>
            <h3>name:{name}</h3>
            <h3>username:{username}</h3>
            <h3>email:{email}</h3>
            <h3>phone:{phone}</h3>
            <h3>website:{website}</h3>
        </div>
    );
};

export {UserDetails};