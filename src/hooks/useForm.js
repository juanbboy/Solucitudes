import { useState } from 'react';


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const setData = (target) => {
        setValues(target);
    }

    const handleInputChange = ({ target }) => {
        if (target.type === 'checkbox') {

            setValues({
                ...values,
                [target.name]: target.checked
            });
        } else {

            setValues({
                ...values,
                [target.name]: target.value
            });
        }
    }

    const inputArray = (target, index) => {
        const list = [...target];
        list[index][target.name] = target.value;
        setValues(list);
    }

    return [values, handleInputChange, reset, setData, inputArray];

}