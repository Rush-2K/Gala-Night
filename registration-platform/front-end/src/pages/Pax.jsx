import { useRef } from "react";
import Button from "../components/Button";
import classes from './Pax.module.css';
import Input from "../components/Input";
import { useState } from "react";
import Example from "../components/Dropdown";

export default function Pax() {
    const quantityRef = useRef();
    const [quantityIsValid, setQuantityIsValid] = useState({
        check: true,
        msg: ''
    });

    function handleSubmit() {
        const enteredQuantity = parseInt(quantityRef.current.value);
        console.log('Quantity: ', enteredQuantity);

        let hasError = false;
        if (enteredQuantity === 0) {
            hasError = true;
            setQuantityIsValid({
                check: false,
                msg: 'Required'
            })
        
        }else{
            hasError = false;
            setQuantityIsValid({
                check: true,
                msg: ''
            })
        }

        if(!hasError){
            console.log('success!! no error')
            // navigate('/pax')
        }else{
            console.log('failed to submit, got error')
        }
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 outline outline-offset-2 outline-cyan-500">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Register
                        </h1>
                        
                        <label htmlFor="quantity-input" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                        <Input 
                            label="Additional Pax"
                            
                        />
                        <Input 
                            type="number" 
                            id="quantity" 
                            name="quantity" 
                            min="1" 
                            max="5" 
                            className={classes.pax}
                            ref={quantityRef}
                            errCheck={quantityIsValid.check}
                            errText={quantityIsValid.msg}
                            defaultValue="0"
                        />
                        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Maximum no. of pax is 5</p>
                        <Button identifier="norm" onClick={handleSubmit}>Submit</Button>
                    </div>
                </div>
            </div>
    ) 
}