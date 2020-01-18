import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import ActionTypes from "../actionTypes";

export default function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}
