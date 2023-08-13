const Car = ({car, setOnSave, setCarUpdate}) => {
    const {id, brand, price, year} = car;

    const deleteCar = () => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,{
            method: 'DELETE'
        }).then(()=>{
            setOnSave(prev=>!prev)
        })
    };

    return (
        <div>
            <div> id: {id}</div>
            <div> brand: {brand}</div>
            <div> price: {price}</div>
            <div> year: {year}</div>
            <button onClick={deleteCar}>delete</button>
            <button onClick={()=> setCarUpdate(car)}>update</button>
        </div>
    );
};

export {Car};