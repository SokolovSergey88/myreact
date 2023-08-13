import {useForm} from "react-hook-form";

const UserForm = ({setUsers}) => {
    const {register, reset, handleSubmit} = useForm();

    const save = (user) =>{
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(value => value.json()).then(value => {
            setUsers(prev => [...prev, value])
            reset()
        })
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <label>name: <input placeholder={'name'} {...register('name')} type="text"/></label>
            <label>username: <input placeholder={'username'} {...register('username')} type="text"/></label>
            <label>email: <input placeholder={'email'} {...register('email')} type="text"/></label>
            <label>street: <input placeholder={'street'} {...register('address.street')} type="text"/></label>
            <label>city: <input placeholder={'city'} {...register('address.city')} type="text"/></label>
            <button>save</button>
        </form>
    );
};

export {UserForm};