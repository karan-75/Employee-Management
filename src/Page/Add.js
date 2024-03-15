import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';


function Add({ employees, setEmployees, setIsAdding }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus()
  }, [])

  const handleAdd = e => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are requried",
        showConfirmButton: true
      });
    }
    const id = employees.length + 1;

    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    }
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added",
      text: `${firstName} ${lastName} 's data has been Added.`,
      showConfirmButton: false,
      timer: 3000
    });
  }

  return (
    <>
      <div className="container" >
        <form onSubmit={handleAdd}>
          <h1 >Add Employee</h1>
          <hr /> <br /><br />

          <div className="mb-3">
            <label className="head" htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" ref={textInput} name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" />
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
            <input id="date" type="date" name=" date" value={date} onChange={e => setDate(e.target.value)} className="form-control" />
          </div>

          <div style={{ marginTop: "30px" }}>
            <input type="submit" value="Add" className="btn btn-primary btnn" />
            <input style={{ marginLeft: "12px" }} className="btn btn-danger btnn" type="button" value="Cancel" onClick={() => setIsAdding(false)} />

          </div>
        </form>
      </div>
    </>

  )
};

export default Add;

