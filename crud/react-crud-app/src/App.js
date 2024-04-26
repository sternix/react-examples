import { Route, Routes } from "react-router-dom";
import NewUser from "./components/Pages/NewUser";
import ListUsers from "./components/Pages/ListUsers";
import EditUser from "./components/Pages/EditUser";
import User from "./components/Pages/User";
import Header from "./components/Common/Header";
import Home from "./components/Pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"

function App() {
  return (
    <div className="App">
      <header className="container">
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/list-users" element={<ListUsers />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;