import Button from "../components/Button"

export default function Confirmation() {
    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 outline outline-offset-2 outline-cyan-500">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            SUCCESSFULL!
                        </h1>
                        <h3 className="text-m font-bold leading-tight tracking-tight text-gray-400 letter-spaced">
                        Thank you for uploading your receipt. Our team will review it within a few business days. Once approved, you'll receive a confirmation email with further details.
                        </h3>
                        <Button identifier="norm">OK</Button>
                    </div>
                </div>
            </div>
        </>
    )
}