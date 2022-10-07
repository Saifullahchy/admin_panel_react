import React, { useCallback, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import './TextEditor.css';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, {
  modules,
  formats,
} from '../../layouts/Dashboard/TextEditor/EditorToolbar';

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { apiPut } from '../../../utils/api';
import { URL } from '../../../utils/getUrl';
const EditNews = () => {
  let navigate = useNavigate();

  const [userInfo, setuserInfo] = useState({
    description: '',
  });
  // const id = window.location.href.split("/")[4];
  const { id } = useParams();
  const [data, setData] = useState('');

  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      title: e.target.value,
    });
  };
  const ondescription = (value) => {
    setuserInfo({ ...userInfo, description: value });
  };

  const getData = async () => {
    const res = await axios
      .get(`http://localhost:5000/news/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    if (!data) {
      getData().then((data) => {
        setData(data.item);
        setuserInfo({
          description: data.item.description,
          title: data.item.title,
        });
      });
    }
  }, [id]);

  const [isError, setError] = useState(null);
  const updateDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      if (userInfo.description.length < 50) {
        setError('Required, Add description minimum length 50 characters');
        return;
      }
      apiPut(`news/${id}`, {
        description: userInfo.description,
      }).then(() => {
        window.location.reload(true);
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="home">
      <div className="container_news">
        <div className="row">
          <div>
            <form onSubmit={updateDetails} className="update__forms">
              <h3 className="myaccount-content" style={{ textAlign: 'center' }}>
                {' '}
                Edit News
              </h3>

              <div className="">
                <div className=" col-md-12 ">
                  <label className="font-weight-bold h4 ">
                    {' '}
                    Title <span className=""> * </span>{' '}
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={userInfo.title}
                    onChange={onChangeValue}
                    className="form-control"
                  />
                </div>
                <div className="clearfix">
                  <div
                    className=" col-md-12 d-flex flex-col "
                    style={{
                      marginTop: '30px',
                    }}
                  >
                    <p className="text-center">Feature Image</p>
                    <img
                      src={`${URL}/static/${data.image}`}
                      alt=""
                      className="rounded mx-auto d-block"
                      style={{
                        width: '400px',
                      }}
                    />
                  </div>
                </div>
                <div
                  className="col-md-12 editor"
                  style={{
                    marginTop: '30px',
                  }}
                >
                  <label className="font-weight-bold">Description</label>
                  <EditorToolbar toolbarId={'t1'} />
                  <ReactQuill
                    className="editor_des"
                    theme="snow"
                    style={{ height: '400px' }}
                    value={userInfo.description}
                    onChange={ondescription}
                    placeholder={'Write something awesome...'}
                    modules={modules('t1')}
                    formats={formats}
                  />
                </div>
                <br />

                <br />
                {isError !== null && <div className="errors"> {isError} </div>}
                <div className=" col-sm-12 text-right">
                  <button type="submit" className="btn btn__theme">
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNews;
