import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import Topbar from "../Dashboard/topbar/Topbar";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Home from "../../pages/home/Home";
import UserList from "../../pages/UserList/UserList"
import RegisterScreen from "./RegisterScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "../../pages/user/User";
const PrivateScreen = ({history}) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("http://127.0.0.1:5000/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/");
  }



  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <Router>
      {/* {privateData} */}
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/users">
            <UserList/>
          </Route>
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/user/:userID" component={User} />
        </Switch>
        
        
        {/* <button onClick= {logoutHandler}>Logout</button> */}
      </div>
        
        
    </Router>
  );
};

export default PrivateScreen;