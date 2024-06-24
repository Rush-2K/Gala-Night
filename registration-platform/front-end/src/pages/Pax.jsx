import Button from "../components/Button";
import classes from './Pax.module.css'

export default function Pax() {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 outline outline-offset-2 outline-cyan-500">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Register
                        </h1>
                        <label for="quantity-input" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="5" className={classes.pax}/>
                        <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Maximum no. of pax is 5</p>
                        <Button identifier="norm">Submit</Button>
                    </div>
                </div>
            </div>
    ) 
}