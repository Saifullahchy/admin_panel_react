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
    subTitle: "",
    description: "",
    image: "",
  });
  const formData = new FormData();
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handlePhoto = (e) => {
    setuserInfo({
      ...userInfo,
      image: e.target.files[0],
    });
  };
  const ondescription = (value) => {
    setuserInfo({ ...userInfo, description: value });
  };

  const [isError, setError] = useState(null);
  const addDetails = async (event) => {
    formData.append("title", userInfo.title);
    formData.append("subtitle", userInfo.subTitle);
    formData.append("description", userInfo.description);
    formData.append("image", userInfo.image);
    try {
      event.preventDefault();
      event.persist();
      if (userInfo.description.length < 50) {
        setError("Required, Add description minimum length 50 characters");
        return;
      }
      axios
        .post(`http://localhost:5000/news`, formData)
        .then(() => {
          userInfo.title = "";
          userInfo.subTitle="";
          userInfo.description = "";
          userInfo.image = "";
        })
        .then(() => {
          window.location.reload(true);
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
                  className="form-control border"
                  placeholder="Add title here"
                  required
                />
              </div>
              <div className="form-group col-md-12">
                <label className="font-weight-bold">
                  {" "}
                  Sub title <span className="required"> * </span>{" "}
                </label>
                <input
                  type="text"
                  name="subTitle"
                  value={userInfo.subTitle}
                  onChange={onChangeValue}
                  className="form-control border"
                  placeholder="Add title here"
                  required
                />
              </div>
              <div className="clearfix">
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  // value={inputs.image}
                  name="image"
                  onChange={handlePhoto}
                  className="form-control"
                  //   disabled
                  placeholder="Upload Image"
                />
              </div>
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
