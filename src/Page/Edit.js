import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

  const id = selectedEmployee.id;
  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleUpdate = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are requried",
        showConfirmButton: true
      });
    }
    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    }

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }
    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Update",
      text: `${employee.firstName} ${employee.lastName} 's data has been Added.`,
      showConfirmButton: false,
      timer: 3000
    });

  };

  return (
    <>
      <div className="container" >
        <form onSubmit={handleUpdate}>
          <h1 >Edit Employee</h1>
          <hr /> <br /><br />

          <div className="mb-3">
            <label className="head" htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" />
          </div>

          <div className="mb-3">
            <label className="head" htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" />
          </div>

          <div className="mb-3">
            <label className="head" htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label className="head" htmlFor="salary">Salary </label>
            <input id="salary" type="number" name="salary" value={salary} onChange={e => setSalary(e.target.value)} className="form-control" />
          </div>

          <div className="mb-3">
            <label className="head" htmlFor="date">Date</label>
            <input id="date" type="date" name="date" value={date} onChange={e => setDate(e.target.value)} className="form-control" />
          </div>

          <div style={{ marginTop: "30px" }}>
            <input type="submit" value="Update" className="btn btn-primary btnn" />
            <input style={{ marginLeft: "12px" }} className="btn btn-danger btnn" type="button" value="Cancel" onClick={() => setIsEditing(false)} />

          </div>
        </form>
      </div>
    </>
  )
}

export default Edit