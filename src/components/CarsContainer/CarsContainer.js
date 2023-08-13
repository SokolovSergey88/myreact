import {CarsForm} from "./CarsForm/CarsForm";
import {Cars} from "./Cars/Cars";
import {useState} from "react";

const CarsContainer = () => {
    const [onSave, setOnSave] = useState(null);
    const [carUpdate, setCarUpdate] = useState(null);
    return (
        <div>
            <CarsForm
                setOnSave={setOnSave}
                carUpdate={carUpdate}
            />
            <hr/>
            <Cars
                onSave={onSave}
                setOnSave={setOnSave}
                setCarUpdate={setCarUpdate}
            />
        </div>
    );
};

export {CarsContainer};