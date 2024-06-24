import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import classes from './Seat.module.css';
import { Link } from 'react-router-dom';

export default function Seat() {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick = (buttonIndex) => {
        // Replace with the actual path to your target page
        navigate('/your-target-page'); // Redirect to the other page
    };
    

    return (
        <>
            <div className={classes.main}>
                <div className={classes.stage}>
                    <div className="grid grid-cols-1">
                            
                    </div>
                    <div className="grid grid-cols-1">
                            
                    </div>
                    <div className={classes.right}>
                            Stage
                    </div>
                    <div className="grid grid-cols-1">
                            
                    </div>
                    <div className="grid grid-cols-1">
                            
                    </div>
                </div>
                
                <div className="grid grid-cols-10 gap-4 mt-5">
                    {Array(50).fill(null).map((_, index) => (
                        <div key={index} className="col-span-1 flex items-center justify-center">
                        <Link
                            to={`/seat/${index}`}
                            key={index}
                            onClick={() => handleClick(index)}
                            className="bg-gray-200 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-full w-12 h-12 focus:outline-none 
                                        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                                        outline outline-offset-2 outline-cyan-500"
                        >
                            <div className='text-black pr-10'>
                            {index + 1}
                            </div>
                        
                        </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}