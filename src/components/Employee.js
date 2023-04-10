import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({employee, deleteEmployee}) => {


  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`)
  };


  return (
    <tr key={employee.id}>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-700'>
                {employee.firstName}
            </div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-700'>
                {employee.lastName}
            </div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-700'>
                {employee.email}
            </div>
        </td>
        <td className='text-right px-6 py-4 whitespace-nowrap space-x-2'>
            <a onClick={(e, id) => editEmployee(e, employee.id)} className='bg-green-600 text-white p-2 rounded shadow hover:bg-green-800 cursor-pointer'> Edit </a>
            <a onClick={(e,id) => deleteEmployee(e, employee.id)} className='bg-red-500 text-white p-2 rounded shadow hover:bg-red-700 cursor-pointer'> Delete </a>
        </td>
    </tr>
  )
}

export default Employee;