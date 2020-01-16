import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h2>Page not found!</h2>
      <p>
        <Link to="/">Home</Link>
      </p>
    </>
  );
}
export default NotFoundPage;
