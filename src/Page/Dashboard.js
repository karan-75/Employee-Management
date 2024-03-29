import React, {useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Page/Header";
import List from "../Page/List";
import Add from "../Page/Add";
import Edit from "../Page/Edit";

import { emplpyeesData } from '../Data/Index';



function Dashboard() {

  const [employees, setEmployees] = useState(emplpyeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  const handleEdit = (id) => {
   const  [employee]=employees.filter(employee => employee.id === id);

      setSelectedEmployee(employee);
      setIsEditing(true);
  }


  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure.",
      text: "You won't be able to revert this !",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then(result =>{
      if(result.value){
        const [employee]= employees.filter(employee => employee.id === id);
        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 3000
        });
        setEmployees(employees.filter(employee => employee.id !== id));
      }
    });

  }

  return (
    <div className="container">

      {/* For Lisrt */}
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
        </>
      )}
      {/* For Add */}
      {isAdding && (
        <Add employees={employees} setEmployees={setEmployees} setIsAdding={setIsAdding} />

      )}
      {/* For Edit */}
      {isEditing && (
        <Edit employees={employees} selectedEmployee={selectedEmployee} setEmployees={setEmployees} setIsEditing={setIsEditing} />
      )}

    </div>
    
  )
  
}


export default Dashboard