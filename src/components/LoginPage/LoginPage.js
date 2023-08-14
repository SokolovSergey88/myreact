import styles from './LoginPage.module.css';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {schema} from "./formValidator";
import {AuthServices} from "../../services/apiServices";


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

    const {handleSubmit, register, formState:{errors}} = useForm({
        resolver: joiResolver(schema)
    });

    const onSubmit = (data) => {
        AuthServices.handleLogin(data);
    };

    // const handleFormChange = (e, key) => {
    //     e.preventDefault()
    //
    //     setFormValue((prevState)=>{
    //         return {
    //             ...prevState,
    //             [key]: e.target.value
    //         }
    //     })
    // };

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <label>
                    <span>Email</span>
                    {/*<input type="text" onChange={handleChangeEmail}/>*/}
                    <input type="text" {...register('email',
                    //     {
                    //     required: 'Это поле обязательное',
                    //     minLength: {
                    //         value: 5,
                    //         message: 'minLength 5'},
                    //     maxLength : {
                    //         value: 20,
                    //         message: 'maxLength 20'},
                    //     pattern: {
                    //         value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    //         message: 'Email not valid'
                    //     }
                    // }
                        )}/>
                </label>
                {errors?.email && <p>{errors.email.message}</p>}
                <label>
                    <span>Password</span>
                    {/*<input type="password" onChange={handleChangePassword}/>*/}
                    <input type="password" {...register('password',
                    //     {
                    //     required: 'Это поле обязательное',
                    //     minLength: {
                    //         value: 5,
                    //         message: 'minLength 5'},
                    //     maxLength : {
                    //         value: 10,
                    //         message: 'maxLength 10'}
                    // }
                    )}/>
                </label>
                {errors?.password && <p>{errors.password.message}</p>}
                <Button type={"submit"} variant="primary">Login</Button>{' '}
                {/*<button type={"submit"}>Login</button>*/}
            </form>
        </div>
    );
};

export {LoginPage};
