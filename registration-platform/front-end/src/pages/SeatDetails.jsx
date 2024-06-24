import { Link, useParams } from "react-router-dom";
import classes from './SeatDetails.module.css';
import Svg from "../components/Svg";

export default function SeatDetails(){
    const { seatid } = useParams();
    const seatId = parseInt(seatid) + 1
    const SEATID = 'P' + seatId.toString();

    // console.log(SEATID);
    
    return (
        <>
            <div className="container mx-auto mt-20 rounded">
                <div className={classes.main}>
                    {/* <p>{seatId}</p> */}
                    {/* first row */}
                    <div className="grid grid-cols-5 bg-white">
                        <div className="bg-white">.</div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                    </div>
                    <div className="grid grid-cols-5 bg-white">
                        <div className="bg-white">.</div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                    </div>
                    <div className="grid grid-cols-5 bg-white">
                        <div className="bg-white">.</div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                    </div>
                    <div className="grid grid-cols-5 bg-white">
                        <div className="bg-white">.</div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                    </div>
                    <div className="grid grid-cols-5 bg-white">
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="flex justify-center items-center col-span-1">
                            <Svg />
                        </div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                    </div>
                    {/* second row */}
                    <div className="grid grid-cols-5 bg-white">
                        <div className="bg-white"></div>
                        <div className="flex justify-center items-center col-span-1">
                            <Svg />
                        </div>
                        <div className="bg-white"></div>
                        <div className="flex justify-center items-center col-span-1">
                            <Svg />
                        </div>
                        <div className="bg-white"></div>
                    </div>
                    {/* third row */}
                    <div className="grid grid-cols-5 bg-white">
                        <div className="flex justify-center items-center col-span-1">
                            <Svg />
                        </div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="flex justify-center items-center col-span-1">
                            <Svg />
                        </div>
                    </div>
                    {/* fourth row */}
                    <div className="grid grid-cols-5 bg-white">
                        <div className="flex justify-center items-center col-span-1">
                            <Svg />
                        </div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="flex justify-center items-center col-span-1">
                            <Svg />
                        </div>
                    </div>
                    {/* fifth row */}
                    <div className="grid grid-cols-5 bg-white">
                        <div className="bg-white"></div>
                        <div className="flex justify-center items-center col-span-1">
                            <Svg />
                        </div>
                        <div className="bg-white"></div>
                        <div className="flex justify-center items-center col-span-1">
                            <Svg />
                        </div>
                        <div className="bg-white"></div>
                    </div>
                    {/* sixth row */}
                    <div className="grid grid-cols-5 bg-white">
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="flex justify-center items-center col-span-1">
                            <Svg />
                        </div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                    </div>
                    <div className="grid grid-cols-5 bg-white">
                        <div className="bg-white">.</div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                    </div>
                    <div className="grid grid-cols-5 bg-white">
                        <div className="bg-white">.</div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                    </div>
                    <div className="grid grid-cols-5 bg-white">
                        <div className="bg-white">.</div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                    </div>
                    <div className="grid grid-cols-5 bg-white">
                        <div className="bg-white">.</div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                        <div className="bg-white"></div>
                    </div>
                </div>
                <p className="flex justify-center items-center mt-5">
                    <Link to=".." relative="path" className="inline-block px-4 py-2 font-semibold uppercase rounded text-gray-900 hover:bg-cyan-400 bg-cyan-600 shadow-lg shadow-cyan-500/50 outline outline-offset-2 outline-cyan-500">Back</Link>
                </p>
            </div>
            
            
        </>
    )
}