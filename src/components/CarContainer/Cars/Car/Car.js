import {useContext} from "react";
import {Context} from "../../CarContainer";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const {setCarForUpdate} = useContext(Context);
    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button >delete</button>
        </div>
    );
};

export {Car};