import React from "react";

class AboutPage extends React.Component {
  style = { maxHight: "300px", paddingBottom: "50px" };
  render() {
    return (
      <>
        <div className="card">
          <div className="card-header">About</div>
          <div className="card-body">
            <div className="container-fluid">
              <div className="text-center">
                <img
                  src={require("../assets/images/avilavate.jpg")}
                  className="img-responsive center-block"
                  style={this.style}
                  alt="Avil Avate"
                />
              </div>

              <div className="text-center">Developed by:</div>
              <div className="text-center">
                <h3>Avil Avate</h3>
              </div>

              <div className="text-center">avilavate123@gmail.com</div>
              <div className="text-center">
                <a href="http://github.com/avilavate">Avil Avate (GitHub)</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutPage;
