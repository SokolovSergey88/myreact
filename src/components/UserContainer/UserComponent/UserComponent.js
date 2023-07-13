
import styles from "./UserComponent.module.css";
const UserComponent = ({user}) => {
    return (
        <div className={styles.wrapper}>
            <h6>Name: {user.name}</h6>
            <h6>Username: {user.username}</h6>
            <h6>Email: {user.address.city}</h6>
        </div>
    );
};

export {UserComponent};