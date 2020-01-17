import React from "react";

function TextInput() {
  return (
    <>
      <div className="form-group"></div>
      <label htmlFor="title">Title</label>
      <div className="field">
        <input
          id="title"
          type="text"
          name="title"
          onChange={props.onChange}
          className="form-control"
          value={props.course.title}
        />
        {props.error && (
          <div className="alert alert-danger">{props.error}}</div>
        )}
      </div>
    </>
  );
}

export default TextInput;
