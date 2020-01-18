import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import ActionTypes from "../actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: ActionTypes.LOAD_COURSES,
      course: courses
    });
  });
}
