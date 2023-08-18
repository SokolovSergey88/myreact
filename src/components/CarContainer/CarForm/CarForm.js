
import {useForm} from "react-hook-form";
import {carService} from "../../../services/carService";
import {useContext, useState} from "react";
import {Context} from "../CarContainer";

const CarForm = () => {
    const [errors, setErrors] = useState(null);
    const {register, handleSubmit, reset, setValue} = useForm();
    const {setTrigger, carForUpdate, setCarForUpdate} = useContext(Context);

    if(carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }

    const save = async (car) => {
        try {
            await carService.create(car);
            setErrors(null)
            reset()
            setTrigger()
        }catch (e) {
            setErrors(e.response.data);
        }

    }

    const update = async (car) => {
        try {
            await carService.updateById(carForUpdate.id, car)
            setCarForUpdate(null)
            setErrors(null)
            setTrigger()
            reset()
        }catch (e) {
            setErrors(e.response.data);
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate? save : update)}>
                <label>brand: <input placeholder={'brand'} {...register('brand')} type="text"/></label>
                <label>price: <input placeholder={'price'} {...register('price')} type="text"/></label>
                <label>year: <input placeholder={'year'} {...register('year')} type="text"/></label>
                <button>{!carForUpdate?'Save':'update'}</button>
            </form>
            {errors && <h1>{JSON.stringify(errors)}</h1>}
        </div>
    );
};

export {CarForm};