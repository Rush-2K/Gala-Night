import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button"
import Input from "../components/Input";
import { addUserDetails } from "../http";
import Error from "../components/Error";

export default function Email() {
    const fullname = useRef();
    const staffid = useRef();
    const email = useRef();
    const grade = useRef();
    const dept = useRef();

    const navigate = useNavigate();
    
    const [fullNameIsValid, setFullNameIsValid] = useState({
        check: true,
        msg: ''
    });
    const [staffIdIsValid, setStaffIdIsValid] = useState({
        check: true,
        msg: ''
    });
    const [emailIsValid, setEmailIsValid] = useState({
        check: true,
        msg: ''
    });
    const [gradeIsValid, setGradeIsValid] = useState({
        check: true,
        msg: ''
    });
    const [deptIsValid, setDeptIsValid] = useState({
        check: true,
        msg: ''
    });

    const [fullNameErr, setFullNameErr] = useState('');
    const [staffIdErr, setStaffIdErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [gradeErr, setGradeErr] = useState('');
    const [deptErr, setDeptErr] = useState('');

    function handleSave() {
        // console.log("handleSave")
        const enteredFullName = fullname.current.value;
        const enteredStaffId = staffid.current.value;
        const enteredEmail = email.current.value;
        const enteredGrade = grade.current.value;
        const enteredDept = dept.current.value;

        // const userData = {
        //     name: enteredFullName,
        //     staffid: enteredStaffId,
        //     email: enteredEmail,
        //     grade: enteredGrade,
        //     department: enteredDept,
        //   };
        let hasErrorFullName = false;
        let hasErrorStaffId = false;
        let hasErrorEmail = false;
        let hasErrorGrade = false;
        let hasErrorDept = false;

        if (enteredFullName.trim() === '') {
            hasErrorFullName = true;
            setFullNameIsValid({
                check: false,
                msg: 'FullName is required'
            })
        }else{
            hasErrorFullName = false;
            setFullNameIsValid({
                check: true,
                msg: ''
            })
        }
        if (enteredStaffId.trim() === '') {
            hasErrorStaffId = true;
            setStaffIdIsValid({
                check: false,
                msg: 'StaffId is required'
            })
        }else{
            hasErrorStaffId = false;
            setStaffIdIsValid({
                check: true,
                msg: ''
            })
        }
        if (enteredEmail.trim() === '' || !/\S+@\S+\.\S+/.test(enteredEmail)) {
            hasErrorEmail = true;
            setEmailErr({
                check: false,
                msg: 'Email is required'
            })
        }else{
            hasErrorEmail = false;
            setEmailIsValid({
                check: true,
                msg: ''
            })
        }
        if (enteredGrade.trim() === ''){
            hasErrorGrade = true;
            setGradeErr({
                check: false,
                msg: 'Grade is required'
            })
        }else{
            hasErrorGrade = false;
            setGradeIsValid({
                check: true,
                msg: ''
            })
        }
        if (enteredDept.trim() === ''){
            hasErrorDept = true;
            setDeptIsValid({
                check: false,
                msg: 'Department is required'
            })
        }else{
        setDeptIsValid(true);
        }

        if(!hasErrorFullName && !hasErrorStaffId && !hasErrorEmail && !hasErrorGrade && !hasErrorDept){
            console.log('success!! no error')
            navigate('/pax')
        }else{
            console.log('failed to submit, got error')
        }

    }

    return (
        <>
            {/* <Error /> */}
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
                            errCheck={fullNameIsValid.check}
                            errText={fullNameIsValid.msg}
                        />
                        <Input 
                            label="StaffID" 
                            type="text" 
                            id="staffid" 
                            ref={staffid}
                            errCheck={staffIdIsValid.check}
                            errText={staffIdIsValid.msg}
                        />
                        <Input 
                            label="Email" 
                            type="email" 
                            id="email" 
                            ref={email}
                            errCheck={emailIsValid.check}
                            errText={emailIsValid.msg}
                        />
                        <Input 
                            label="Grade" 
                            type="text" 
                            id="grade" 
                            ref={grade}
                            errCheck={gradeIsValid.check}
                            errText={gradeIsValid.msg}
                            />
                        <Input 
                            label="Department" 
                            type="text" 
                            id="dept" 
                            ref={dept}
                            errCheck={deptIsValid.check}
                            errText={deptIsValid.msg}
                        />
                        <label for="paxNo" className="block mb-2 text-s font-bold tracking-wide uppercase text-stone-300 font-sans-Roboto">Additional Pax</label>

                        <select name="pax" id="pax">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
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