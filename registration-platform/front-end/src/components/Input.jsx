import { forwardRef } from "react";

const Input = forwardRef(function Input({label, errCheck, errText, ...props}, ref) {
    return (
        <div>
            <label className="block mb-2 text-s font-bold tracking-wide uppercase text-stone-300 font-sans-Roboto">{label}</label>
            <input className="w-full px-3 py-2 leading-tight border rounded shadow text-gray-700 bg-stone-300" {...props} ref={ref}/>
            {errCheck === false && <h2 className="text-xl text-red-600">{errText}</h2>}
            {errCheck === true && <h2 className="text-xl text-red-600"></h2>}
        </div>
    )
})

export default Input;