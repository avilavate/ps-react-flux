import React, { useState, useEffect } from "react";

import { getCourses } from "../api/courseApi";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => {
      setCourses(_courses);
    });
  }, []);

  function getCoursesGrid() {
    return (
      <tbody>
        {courses.map(course => {
          return (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
  return (
    <>
      <h1>Course</h1>
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
    </>
  );
}

export default CoursesPage;
