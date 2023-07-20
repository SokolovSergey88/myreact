import {UserContainer} from "./components/UserContainer/UserContainer";
import styles from './components/UserContainer/UserComponent/UserComponent.module.css'
import {useState} from "react";

const App = () => {
    const [show, setShow] = useState(true)

  return (
      <div>
          {show && <UserContainer />}
      </div>
  );
};

export {App};
