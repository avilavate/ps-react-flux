import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: ""
  });

  const handleCourseChange = e => {
    const updatedCourse = { ...course, [e.target.name]: e.target.value };
    console.log("Updated Course: " + JSON.stringify(updatedCourse));
    setCourse(updatedCourse);
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleCourseChange}></CourseForm>
    </>
  );
};

export default ManageCoursePage;
