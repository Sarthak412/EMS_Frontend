import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

  const navigate = useNavigate();

  const[employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email:"",
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value});
  }
  
  // Saving employee in the database
  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee).then((response)=> {
      console.log(response);
      navigate("/employeeList")
    }).catch((err) => { 
      console.log(err);
    });
  }

  const reset = (e) =>{
    e.preventDefault();
    setEmployee({
      id:"",
      firstName: "",
      lastName:"",
      email:"",
    });
  }

  return (
    <div className="flex w-fit mx-auto mt-[40px] shadow-md border-b rounded custom_media">
        <div className="px-8 py-8">
            <div className="font-semibold text-2xl tracking-wider custom_text">
                <h1> Add New Employee </h1>
            </div>

            {/* Form element to add a new employee */}
            {/* First name */}
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-700 text-md font-normal w-fit mt-[30px]">First name: </label>
              <input 
                type="text"  
                name="firstName"
                value={employee.firstName}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2 custom_label"
              >
              </input>
            </div>

            {/* Last name */}
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-700 text-md font-normal w-fit mt-[30px]">Last name: </label>
              <input 
                type="text"
                name="lastName"
                value={employee.lastName}  
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2 custom_label"
              > 
              </input>
            </div>

            {/* Email */}
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-700 text-md font-normal w-fit mt-[30px]"> Email </label>
              <input 
                type="email" 
                name="email"
                value={employee.email}
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2 custom_label"
              >
              </input>
            </div>

            {/* Save Button */}
            <div className="items-center justify-center h-14 w-fit my-4 pt-5 space-x-4">
              <button onClick={saveEmployee} className="rounded text-white font-semibold bg-green-600 py-2 px-6 shadow hover:bg-green-700"> Save </button> 
              <button onClick={reset} className="rounded text-white font-semibold bg-red-600 py-2 px-6 shadow hover:bg-red-800"> Clear </button> 
            </div>

        </div>
    </div>
  )
}

export default AddEmployee;