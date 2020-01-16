import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutPage from "./AboutComponent";
import HomePage from "./HomeComponent";
import Header from "./Header";
import CoursesPage from "./CoursesComponent";
import NotFoundPage from "./NotFoundComonent";
import ManageCoursePage from "./ManageCourseComponent";

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" exact component={AboutPage}></Route>
        <Route path="/courses" exact component={CoursesPage}></Route>
        <Route path="/course/:slug" exact component={ManageCoursePage}></Route>
        <Redirect from="/about-page" to="/about"></Redirect>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
