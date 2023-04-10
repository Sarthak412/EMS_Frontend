import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';


const EmployeeList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {   
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    fetchData();

  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res)=> {
        if(employees){
            setEmployees((prevElement) => {
                return prevElement.filter((employee)=> employee.id !== id);
            });
        }
    });
  };

  return (
    <div className='text-left container mx-8 my-8'>     
        <div className='h-12'>
            <button onClick = {() => navigate("/addEmployee")} className='rounded bg-green-600 text-white px-6 py-2 font-semibold shadow hover:bg-green-800'>Add Employee</button>
        </div>
        <div className='flex shadow border-b md:w-[1200px] sm:w-[650px] custom_width'>
            <table className='min-w-full'>
                <thead className='bg-gray-50 sm:w-fit custom_width'>
                    <tr>
                        <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'> First Name </th>
                        <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'> Last Name </th>
                        <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'> Email </th>
                        <th className='text-right font-medium text-gray-600 uppercase tracking-wider py-3 px-6'> Actions </th>
                    </tr>
                </thead>
                {!loading && (
                <tbody className='bg-white'>
                    {employees.map((employee) => (
                        <Employee employee={employee} deleteEmployee={deleteEmployee} key={employee.id}></Employee>
                    ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default EmployeeList;