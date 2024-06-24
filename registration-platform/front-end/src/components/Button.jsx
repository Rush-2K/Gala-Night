import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

export default function Button ({identifier, children, ...props}) {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick = (buttonIndex) => {
        // Replace with the actual path to your target page
        navigate('/your-target-page'); // Redirect to the other page
    };

    let cssClasses=''

    // if (identifier === "upload"){
    //     cssClasses += ' -ml-24'
    // }

    if(identifier === "norm"){
        cssClasses+='px-4 py-2 font-semibold uppercase rounded text-gray-900 hover:bg-cyan-400 bg-cyan-600 shadow-lg shadow-cyan-500/50 outline outline-offset-2 outline-cyan-500'
    }

    if(identifier === "seatparent"){
        cssClasses+="px-4 py-2 font-semibold uppercase rounded text-gray-900 bg-blue-300 hover:bg-blue-400 outline outline-offset-2 outline-cyan-500 "
    }
    
    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    )
}