import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
  function getCoursesGrid() {
    return (
      <tbody>
        {props.courses.map(course => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.slug}> {course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
  return (
    <div className="container">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Author Id</th>
            <th>Category</th>
          </tr>
        </thead>
        {getCoursesGrid()}
      </table>
    </div>
  );
}

export default CourseList;
