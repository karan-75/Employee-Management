import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ setIsAdding }) {
  return (
    <header>
      <h1>Employee Management Software</h1><hr/>
      <div style={{marginTop: "30px", marginBottom: "18px"}}>
      </div><br/>
      <Button   className="round-button" onClick={() => setIsAdding(true)}   color="primary">Add Button</Button>

    </header>
  )
}

export default Header