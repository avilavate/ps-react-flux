import { EventEmitter } from "events";
import { dispatcher } from "../appDispatcher";
import ActionTypes from "../actionTypes";

const CHANGE_ENENT = "change";
const _course = [];

function CourseStore() {
  const eventEmitter = new EventEmitter();

  function addChangeListner(callback) {
    eventEmitter.addListener(CHANGE_ENENT, callback);
  }

  function addChangeListner(callback) {
    eventEmitter.removeListener(CHANGE_ENENT, callback);
  }

  function emitChange() {
    eventEmitter.on(CHANGE_ENENT);
  }

  function getCourse() {
    return _course;
  }
}

dispatcher.register(action => {
  switch (ActionTypes) {
    case ActionTypes.CREATE_COURSE:
      _course.push(action.course);
      CourseStore.emitChange();
      break;

    default:
      break;
  }
});

export default CourseStore;
