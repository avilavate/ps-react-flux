import React, { useState, useEffect } from "react";

import { getCourses } from "../api/courseApi";
import CourseList from "./CourseListComponent";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => {
      setCourses(_courses);
    });
  }, []);

  return (
    <>
      <h1>Course</h1>
      <CourseList courses={courses}></CourseList>
    </>
  );
}

export default CoursesPage;
