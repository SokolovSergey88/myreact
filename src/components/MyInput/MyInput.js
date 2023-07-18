import {useState} from "react";
import styles from './MyInput.module.css';

const MyInput = () => {

    const [text, setText] = useState('hello');

    function handleChange(e){
        setText(e.target.value);
    }


    return (
        <div>
            <div className={styles.wrapper}>
            <input type="text" value={text} onChange={handleChange}/>
            <p>You typed {text}</p>
            <button onClick={()=> setText('')}>RESET</button>
            </div>
        </div>
    );
};

export {MyInput};