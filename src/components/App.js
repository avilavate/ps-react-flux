import React from "react";

import AboutPage from "./AboutComponent";
import HomePage from "./HomeComponent";
import Header from "./Header";
import CoursesPage from "./CoursesComponent";

function App() {
  function getPage() {
    const url = window.location.pathname;
    if (url === "/about") return <AboutPage></AboutPage>;
    if (url === "/courses") return <CoursesPage></CoursesPage>;
    else return <HomePage></HomePage>;
  }
  return (
    <div className="container-fluid">
      <Header></Header>
      {getPage()}
    </div>
  );
}

export default App;
