import React, { useState, useEffect } from "react";

// import { getCourses } from "../api/courseApi";
import CourseList from "./CourseListComponent";
import store from "../stores/courseStore";
import { loadCourses } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(store.getCourses());

  useEffect(() => {
    store.addChangeListner(onChange);
    if (store.getCourses().length === 0) {
      loadCourses();
    }
    let courses = store.getCourses();
    debugger;
    setCourses(courses);
  }, []);

  function onChange() {
    setCourses(store.getCourses());
  }

  return (
    <>
      <h1>Course</h1>
      <CourseList courses={courses}></CourseList>
    </>
  );
}

export default CoursesPage;
