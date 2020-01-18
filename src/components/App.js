import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutPage from "./AboutComponent";
import HomePage from "./HomeComponent";
import Header from "./Header";
import CoursesPage from "./CoursesComponent";
import NotFoundPage from "./NotFoundComonent";
import ManageCoursePage from "./ManageCourseComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <ToastContainer autoClose={3000}></ToastContainer>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" exact component={AboutPage}></Route>
        <Route path="/courses" component={CoursesPage}></Route>
        <Route path="/course/" component={ManageCoursePage}></Route>
        <Route path="/course/:slug" component={ManageCoursePage}></Route>
        <Redirect from="/about-page" to="/about"></Redirect>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
