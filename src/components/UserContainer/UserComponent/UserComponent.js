
import styles from "./UserComponent.module.css";

const UserComponent = ({user, handleClick}) => {
    return (
        <div className={styles.wrapper}>
            <h6>Name: {user.name}</h6>
            <h6>Username: {user.username}</h6>
            <h6>Email: {user.address.city}</h6>
            <button onClick={()=> handleClick(user.name)}>Show me</button>
        </div>
    );
};

export {UserComponent};