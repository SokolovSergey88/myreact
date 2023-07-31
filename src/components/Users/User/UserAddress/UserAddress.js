const UserAddress = ({address}) => {
    const {street, city} = address;
    return (
        <div>
            <h3>Street: {street}</h3>
            <h3>City: {city}</h3>
        </div>
    );
};

export {UserAddress};