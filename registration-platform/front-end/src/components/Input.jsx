import { forwardRef } from "react"

const Input = forwardRef(function Input({label, ...props}, ref) {
    return (
        <p>
            <label className="block mb-2 text-s font-bold tracking-wide uppercase text-stone-300 font-sans-Roboto">{label}</label>
            <input className="w-full px-3 py-2 leading-tight border rounded shadow text-gray-700 bg-stone-300" {...props} ref={ref}/>
        </p>
    )
})

export default Input;