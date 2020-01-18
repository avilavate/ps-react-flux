import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import ActionTypes from "../actionTypes";

const CHANGE_ENENT = "change";
const _course = [];
const eventEmitter = new EventEmitter();

function CourseStore() {}

CourseStore.addChangeListner = callback => {
  eventEmitter.addListener(CHANGE_ENENT, callback);
};

CourseStore.removeChangeListner = function(callback) {
  eventEmitter.removeListener(CHANGE_ENENT, callback);
};

CourseStore.emitChange = function() {
  eventEmitter.emit(CHANGE_ENENT);
};

CourseStore.getCourse = function() {
  return _course;
};

CourseStore.getCoursebySlug = function(slug) {
  console.log(`_Course ${_course}`);
  return _course.find(_c => _c.slug === slug);
};

export default CourseStore;

dispatcher.register(action => {
  debugger;
  switch (action.actionType) {
    case ActionTypes.CREATE_COURSE:
      _course.push(action.course);
      CourseStore.emitChange();
      break;

    default:
      break;
  }
});
