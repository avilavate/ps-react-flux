import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
//import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";
import saveCourse from "../actions/courseActions";
import courseStore from "../stores/courseStore";

const ManageCoursePage = props => {
  const [error, setError] = useState({});
  const [course, setCourse] = useState({
    id: null,
    title: " ",
    slug: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      let course = courseStore.getCoursebySlug(slug);
      setCourse(course);
    }
  }, [props.match.params.slug]);

  const handleCourseChange = e => {
    formIsValid();
    const updatedCourse = { ...course, [e.target.name]: e.target.value };
    setCourse(updatedCourse);
  };

  function formIsValid() {
    const _error = {};
    if (!course.title || course.title === " ")
      _error.title = "Title is required";
    if (!course.authorId) _error.authorId = "Author is required";
    if (!course.category) _error.category = "Category is required";

    setError(_error);

    return Object.keys(_error).length === 0;
  }

  const handleSave = e => {
    e.preventDefault();
    if (!formIsValid()) return;
    // courseApi.saveCourse(course).then(() => {
    //   toast.success("Course added successfuly");
    //   props.history.push("/courses");
    // });
    saveCourse(course).then(() => {
      toast.success("Action Executed: Course Added");
      props.history.push("/courses");
    });
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        error={error}
        course={course}
        onChange={handleCourseChange}
        onSubmit={handleSave}
      ></CourseForm>
    </>
  );
};

export default ManageCoursePage;
