import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Counter from './Counter';
import UserForm from './Userform';
import Mydashboard from "./dashboard";


function App() {
  return (
    <HashRouter>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" >React & Redux</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/" >Dashboard</Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/counter" >Counter</Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/user" >Manage User</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>


      <Routes>
        <Route exact path="/" element={<Mydashboard />} />
        <Route exact path="/counter" element={<Counter />} />
        <Route exact path="/user" element={<UserForm />} />

      </Routes>
    </HashRouter>
    // <div className="App">
    //   {/* <Counter /> */}
    //   <UserForm />
    // </div>
  );
}

export default App;
