import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  LineStyle,
  Timeline,
  PostAddTwoTone,
  NorthEastTwoTone,
  NextWeekTwoTone,
  NordicWalkingTwoTone,
  MenuBookTwoTone,
  HailTwoTone,
  LocationOffTwoTone,
  MarkEmailUnreadTwoTone,
  AccountCircleTwoTone,
  LogoutTwoTone,
} from "@mui/icons-material";
import { color } from "@mui/system";

export default function Sidebar({ history }) {
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    this.history.push("/");
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              {" "}
              <li className="sitebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sitebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Pages</h3>
          <ul className="sidebarList">
            <Link
              to="/news-post"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li className="sitebarListItem ">
                <PostAddTwoTone className="sidebarIcon" />
                NEWS
              </li>
            </Link>

            <Link
              to="news/all-news"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <li className="sitebarListItem ml-3">All News</li>
            </Link>

            <li className="sitebarListItem">
              <NorthEastTwoTone className="sidebarIcon" />
              IMMIGRATE TO CANADA
            </li>
            <li className="sitebarListItem">
              <MenuBookTwoTone className="sidebarIcon" />
              STUDY PERMIT
            </li>
            <li className="sitebarListItem">
              <HailTwoTone className="sidebarIcon" />
              BUSINESS IMMIGRATION
            </li>
            <li className="sitebarListItem">
              <NordicWalkingTwoTone className="sidebarIcon" />
              FAMILY SPONSORSHIP
            </li>
            <li className="sitebarListItem">
              <NextWeekTwoTone className="sidebarIcon" />
              WORK PERMIT
            </li>
            <li className="sitebarListItem">
              <LocationOffTwoTone className="sidebarIcon" />
              REFUSAL APPEALS AND INADMISSIBILITY
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sitebarListItem">
              <MarkEmailUnreadTwoTone className="sidebarIcon" />
              Mail
            </li>
            <Link
              to="/users"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <li className="sitebarListItem">
                <AccountCircleTwoTone className="sidebarIcon" />
                User
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Access</h3>
          <ul className="sidebarList">
            <li className="sitebarListItem">
              <LogoutTwoTone className="sidebarIcon" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
