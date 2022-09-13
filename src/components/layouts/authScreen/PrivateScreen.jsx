import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import Topbar from "../Dashboard/topbar/Topbar";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Home from "../../pages/home/Home";
import UserList from "../../pages/UserList/UserList";
import RegisterScreen from "./RegisterScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "../../pages/user/User";
import NewsPage from "../../pages/News/NewsPage";
import AllNews from "../../pages/News/AllNews";
import EditNews from "../../pages/News/EditNews";
const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(
          "http://127.0.0.1:5000/api/private",
          config
        );
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
    // history.push("/");
  };

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      {/* {privateData} */}
      <Topbar />
      <div className="container-main">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/news-post" element={<NewsPage />} />

          <Route path="/users" element={<UserList />} />

          <Route path="/news/all-news" element={<AllNews />} />

          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/user/:userID" component={<User />} />
          <Route path="/editnews/:id" component={<EditNews />} />
        </Routes>
        {/* <button onClick= {logoutHandler}>Logout</button> */}
      </div>
    </>
  );
};

export default PrivateScreen;
