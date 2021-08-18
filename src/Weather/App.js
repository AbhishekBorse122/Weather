import React from "react";
import Weather from './Weather';
function App() {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light bg-dark">
          <span>Weather</span>
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li id='user' className="nav-item"><a href="https://www.linkedin.com/in/abhishek-borse-722278201/"><i className="far fa-user-circle fa-lg mt-2"></i></a></li>      
            </ul>
      </nav>
    </div>
    <div className="container">
        <Weather />
    </div>
    </>
    )
}
      export default App;