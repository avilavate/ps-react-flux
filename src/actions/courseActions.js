import dispatcher from "./dispatcher";
import * as courseApi from "../api/courseApi";
import ActionTypes from "../actionTypes";

export function saveCourse(course) {
  courseApi.saveCourse(course).then(savedCourse => {
    dispatcher.dispatch({
      actionType: "COURSE_CREATE",
      course: saveCourse
    });
  });
}
