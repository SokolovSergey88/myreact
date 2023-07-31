import {UserDetails} from "./UserDetails/UserDetails";
import {UserAddress} from "./UserAddress/UserAddress";
import {Company} from "./Company/Company";

const User = ({user: {id,name,username,email,address,company}}) => {
    return (
        <div>
            <UserDetails data={{id,name,username,email}}/>
            <UserAddress address={address}/>
            <Company company={company}/>
        </div>
    );
};

export {User};