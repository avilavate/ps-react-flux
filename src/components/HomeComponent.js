import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Course Administration</h1>
      <p>React Flux & React Router for ultra fast Web Apps.</p>

      <p>
        <Link className="btn btn-primary" to="/about">
          About
        </Link>
      </p>
    </div>
  );
}
export default HomePage;
