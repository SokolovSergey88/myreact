const UserAddress = ({user}) => {
    const {address: {street, suite, city}} = user;
    return (
        <div>
            <p>street:{street}</p>
            <p>suite:{suite}</p>
            <p>city:{city}</p>
        </div>
    );
};

export {UserAddress};