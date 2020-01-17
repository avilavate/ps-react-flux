import React from "react";
import TextInput from "./common/TextInputComponent";

function CourseForm(props) {
  console.log(JSON.stringify(props));
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        label="Title"
        type="text"
        id={props.course.title}
        name="title"
        onChange={props.onChange}
        className="form-control"
        value={props.course.title}
        error={props.error.title}
      />

      <div className="field">
        <select
          id={props.course.authorId}
          name="authorId"
          onChange={props.onChange}
          value={props.course.authorId}
        >
          <option />
          <option value="1">Cory House</option>
          <option value="2">Scott Allen</option>
        </select>
        {props.error && props.error.authorId ? (
          <div className="alert-danger alert">{props.error.authorId}</div>
        ) : (
          <></>
        )}
      </div>

      <TextInput
        label="Category"
        type="text"
        id={props.course.category}
        name="category"
        onChange={props.onChange}
        className="form-control"
        value={props.course.category}
        error={props.error.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
