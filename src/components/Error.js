import React from 'react'
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"

function Error(){
  return (
    <section className="error-section">
      <div className="error-container">
        <h1>Ooops! You are caught up!</h1>
        <Link to= "/" className="btn-home">
          <Button variant="success">Back Home</Button>{" "}
        </Link>
      </div>
    </section>
  );
}
export default Error;