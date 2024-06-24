import qrCode from '../assets/qr-code.png'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Payment () {
    return (
        <>
            <div className="container mx-auto p-6 dark:bg-gray-800 dark:border-gray-700 rounded-lg outline outline-offset-2 outline-cyan-500">
                <div className="dark:bg-gray-800 dark:border-gray-700 rounded-lg flex overflow-hidden">

                    <div className='flex justify-center items-center w-1/2 p-6'>
                        <img src={qrCode} alt="qr code" className='w-[300px] h-[300px] content-center'/>
                    </div>
                    
                    <div className="w-1/2 p-6 flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Payment</h2>
                        <p className="text-gray-400 mb-4">
                            Please ensure to upload the receipt for admin to check.
                        </p>
                        <p className="text-gray-400 mb-4">
                            Once the receipt is confirmed, you will receive the booking confirmation
                        </p>
                        <Input label="file" type="file" className="mb-10 w-auto" />
                        <Button identifier="norm">Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}