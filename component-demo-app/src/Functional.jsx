import React from "react";
import{FaArrowCircleLeft,FaUser,FaRupeeSign,FaWeibo} from "react-icons/fa";
import 'animate.css';
const Emp = {
    id :1001,
    name : "ABC",
    age : 21,
    salary : 50000,
    department : "IT"
}

function EmployeeData(){
    return(
        <>
            <div className="app">
                <h1>This is Functional Component</h1>
                <p><b><FaArrowCircleLeft className="icon-Size" /> Employee ID :</b> {Emp.id}</p>
                <p><b><FaUser className="icon-Size" /> Employee Name :</b> {Emp.name}</p>
                <p><b><FaUser className="icon-Size" /> Employee Age :</b> {Emp.age}</p>
                <p><b><FaRupeeSign className="icon-Size" /> Employee Salary :</b> {Emp.salary}</p>
                <p><b><FaWeibo className="icon-Size" /> Employee Department :</b> {Emp.department}</p>
            </div>
        </>
    )
}
export default EmployeeData;