// import {useEffect, useState} from "react";
//
// const CarsForm = ({setOnSave}) => {
//     const initialState = {
//         brand: '',
//         price: '',
//         year: ''
//     }
//     const [car, setCar] = useState(initialState);
//
//     const inputHandle = (e) => {
//       setCar(prev=> ({...prev, [e.target.name]: e.target.value}))
//     };
//
//     const save = (e) => {
//         e.preventDefault()
//
//        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
//            method:"POST",
//            headers: {'Content-type': 'application/json'},
//            body: JSON.stringify(car)
//        }).then(value => value.json()).then(value => {
//            setOnSave(prev=>!prev)
//            setCar(initialState)
//        })
//     }
//
//     return (
//         <form onSubmit={save}>
//             <div><label>brand :<input type="text" value={car.brand} name={'brand'} onChange={inputHandle}/></label></div>
//             <div><label>price :<input type="text" value={car.price} name={'price'} onChange={inputHandle}/></label></div>
//             <div><label>year :<input type="text" value={car.year} name={'year'} onChange={inputHandle}/></label></div>
//             <button>Save</button>
//         </form>
//     );
// };
//
// export {CarsForm};

import {useForm} from "react-hook-form";
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import carValidator from "../../../validators/carValidator";
import {useEffect} from "react";

const CarsForm = ({setOnSave, carUpdate}) => {
    const {register, handleSubmit,reset,formState:{isValid, errors},setValue} = useForm({
        mode: 'all',
        resolver:joiResolver(carValidator)
    });

    useEffect(()=>{
        if(carUpdate){
            setValue('brand', carUpdate.brand, {shouldValidate: true})
            setValue('price', carUpdate.price, {shouldValidate: true})
            setValue('year', carUpdate.year, {shouldValidate: true})
        }
    },[carUpdate]);

    const save = (car) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars',{
            method: "POST",
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(car)
        }).then(value => value.json()).then(value => {
            if(!value.ok){
                throw Error(value.status + ' not ok')
            }
            return value.json()
        })
            .then(() => {
                setOnSave(prev=>!prev)
                reset()
            })
            .catch(e=>{
            console.log(e);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <label><input type="text" placeholder={'brand'} {...register('brand', {
                    required: true
                }) }/></label>
                {errors.brand && <span>{errors.brand.message}</span>}
                <label><input type="text" placeholder={'price'} {...register('price', {
                    // valueAsNumber: true,
                    // required: true,
                    // min: {value: 0, message: 'price must be gte 0'},
                    // max: {value: 1000000, message: 'price must be lte 1000000'}
                })}/></label>
                {errors.price && <span>{errors.price.message}</span>}
                <label><input type="text" placeholder={'year'} {...register('year', {
                    // valueAsNumber: true,
                    // required: true,
                    // min: {value: 1990, message: 'year gte 1990'},
                    // max: {value: new Date().getFullYear(), message: `year lte ${new Date().getFullYear()}`}
                })}/></label>
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>Save</button>
            </form>
        </div>
    );
};

export {CarsForm};