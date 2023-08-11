import styles from './LoginPage.module.css';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

const LoginPage = () => {
    const [formValue,setFormValue] = useState({
        email: '',
        password: ''
    });
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const handleChangeEmail = (e) => setEmail(e.target.value);
    //
    // const handleChangePassword = (e) => setPassword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
    };

    const handleFormChange = (e, key) => {
        e.preventDefault()

        setFormValue((prevState)=>{
            return {
                ...prevState,
                [key]: e.target.value
            }
        })
    };

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    <span>Email</span>
                    {/*<input type="text" onChange={handleChangeEmail}/>*/}
                    <input value={formValue.email} type="text" onChange={(e)=>handleFormChange(e, 'email')}/>
                </label>
                <label>
                    <span>Password</span>
                    {/*<input type="password" onChange={handleChangePassword}/>*/}
                    <input value={formValue.password} type="password" onChange={(e)=>handleFormChange(e, 'password')}/>
                </label>
                <Button type={"submit"} variant="primary">Login</Button>{' '}
                {/*<button type={"submit"}>Login</button>*/}
            </form>
        </div>
    );
};

export {LoginPage};