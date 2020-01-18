import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import ActionTypes from "../actionTypes";

const CHANGE_ENENT = "change";
let _course = [];

class CourseStore extends EventEmitter {
  addChangeListner(callback) {
    this.on(CHANGE_ENENT, callback);
  }

  removeChangeListner(callback) {
    this.removeListener(CHANGE_ENENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_ENENT);
  }

  getCourses() {
    return _course;
  }

  getCoursebySlug(slug) {
    console.log(`_Course ${this._course}`);
    return _course.find(_c => _c.slug === slug);
  }
}

const store = new CourseStore();

export default store;
dispatcher.register(action => {
  switch (action.actionType) {
    case ActionTypes.CREATE_COURSE:
      _course.push(action.course);
      store.emitChange();
      break;
    case ActionTypes.LOAD_COURSES:
      _course = action.course;
      store.emitChange();
      break;
    default:
      break;
  }
});
