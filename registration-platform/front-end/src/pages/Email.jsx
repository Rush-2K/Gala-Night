import { useRef } from "react"
import Button from "../components/Button"
import Input from "../components/Input";
import { addUserDetails } from "../http";

export default function RegistrationPage() {
    const fullname = useRef();
    const staffid = useRef();
    const email = useRef();
    const grade = useRef();
    const dept = useRef();

    function handleSave() {
        console.log("handleSave")
        const enteredFullName = fullname.current.value;
        const enteredStaffId = staffid.current.value;
        const enteredEmail = email.current.value;
        const enteredGrade = grade.current.value;
        const enteredDept = dept.current.value;

        // let hasErrors = false;
        // if (enteredFullName.trim() === '') {
        // errors.fullName = 'Full Name is required.';
        // hasErrors = true;
        // }
        // if (enteredStaffId.trim() === '') {
        // errors.staffid = 'Staff ID is required.';
        // hasErrors = true;
        // }
        // if (enteredEmail.trim() === '' || !/\S+@\S+\.\S+/.test(enteredEmail)) {
        // errors.email = 'Please enter a valid email address.';
        // hasErrors = true;
        // }
        

        // if (hasErrors) {
        // setErrors(errors); 
        // return; 
        // }

        const userData = {
            name: enteredFullName,
            staffid: enteredStaffId,
            email: enteredEmail,
            grade: enteredGrade,
            department: enteredDept,
          };

        addUserDetails(userData)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 outline outline-offset-2 outline-cyan-500">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            REGISTER
                        </h1>
                        <Input 
                            label="FullName" 
                            type="text" 
                            id="fullname" 
                            ref={fullname}
                        />
                        <Input 
                            label="StaffID" 
                            type="text" 
                            id="staffid" 
                            ref={staffid}
                        />
                        <Input 
                            label="Email" 
                            type="email" 
                            id="email" 
                            ref={email}
                        />
                        <Input 
                            label="Grade" 
                            type="text" 
                            id="grade" 
                            ref={grade}
                        />
                        <Input 
                        label="Department" 
                        type="text" 
                        id="dept" 
                        ref={dept}
                        />
                        <div className="flex items-center">
                            <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                I agree to allow registration platform to collect
                                and process my/our data 
                                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline"> Refer how we process youe data</a>.</label>
                        </div>
                        <Button identifier="norm" onClick={handleSave}>Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}