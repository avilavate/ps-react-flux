import React from "react";

import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    getCourses().then(courses => {
      this.setState({ courses: courses });
    });
  }

  render() {
    return (
      <>
        <h1>Course</h1>
        <div className="container">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Title</th>
                <th>Author Id</th>
                <th>Category</th>
              </tr>
            </thead>
            {this.getCoursesGrid()}
          </table>
        </div>
      </>
    );
  }

  getCoursesGrid() {
    return (
      <tbody>
        {this.state.courses.map(course => {
          return (
            <tr>
              <td>{course.title}</td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default CoursesPage;
