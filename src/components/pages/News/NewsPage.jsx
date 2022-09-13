import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "./TextEditor.css";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, {
  modules,
  formats,
} from "../../layouts/Dashboard/TextEditor/EditorToolbar";
import axios from "axios";

const NewsPage = () => {
  const [userInfo, setuserInfo] = useState({
    title: "",
    description: "",
  });

  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const ondescription = (value) => {
    setuserInfo({ ...userInfo, description: value });
  };

  const [isError, setError] = useState(null);
  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      if (userInfo.description.length < 50) {
        setError("Required, Add description minimum length 50 characters");
        return;
      }
      axios
        .post(`http://localhost:5000/news`, {
          title: userInfo.title,
          description: userInfo.description,
        })
        .then(() => {
          userInfo.title = "";
          userInfo.description = "";
        });
    } catch (error) {
      throw error;
    }
  };
  console.log(userInfo);

  return (
    <div className="home">
      <div className="container_news">
        <div className="row">
          <form onSubmit={addDetails} className="update__forms">
            <h3 className="myaccount-content" style={{ textAlign: "center" }}>
              {" "}
              Add News
            </h3>
            <div className="btn btn-primary col col-3 text-center">
              All News
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label className="font-weight-bold">
                  {" "}
                  Title <span className="required"> * </span>{" "}
                </label>
                <input
                  type="text"
                  name="title"
                  value={userInfo.title}
                  onChange={onChangeValue}
                  className="form-control"
                  placeholder="Title"
                  required
                />
              </div>
              <div className="clearfix"></div>
              <div className="form-group col-md-12 editor">
                <label className="font-weight-bold">
                  {" "}
                  Description <span className="required"> * </span>{" "}
                </label>
                <EditorToolbar toolbarId={"t1"} />
                <ReactQuill
                  className="editor_des"
                  theme="snow"
                  style={{ height: "400px" }}
                  value={userInfo.description}
                  onChange={ondescription}
                  placeholder={"Write something awesome..."}
                  modules={modules("t1")}
                  formats={formats}
                />
              </div>
              <br />

              <br />
              {isError !== null && <div className="errors"> {isError} </div>}
              <div className="form-group col-sm-12 text-right">
                <button type="submit" className="btn btn__theme">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
