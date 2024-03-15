import React from 'react';
import { Table, Button } from 'reactstrap';



function List({ employees, handleEdit, handleDelete }) {

  const formater = new Intl.NumberFormat("en-us",{
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null
  })
  return (
    <div className="contain-table">
      <br/>
      <Table striped style={{textAlign:"center" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody style={{verticalAlign: "middle"}}>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i+1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{formater.format(employee.salary)}</td>
                <td>{employee.date}</td>
                <td >
                  <Button onClick={() => handleEdit(employee.id)} className="button primary-button" outline>Edit</Button>
                </td>
                <td >
                  <Button onClick={() => handleDelete(employee.id)} className="button muted-button" outline>Delete</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}> No Employees</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default List;


