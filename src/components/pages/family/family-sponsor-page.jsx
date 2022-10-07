import React, { useCallback, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { apiGet, apiPost, apiPut } from '../../../utils/api';
// import './TextEditor.css';
import 'react-quill/dist/quill.snow.css';
// import './immigrate.css';
import EditorToolbar, {
  modules,
  formats,
} from '../../layouts/Dashboard/TextEditor/EditorToolbar';
const FamilySponsor = () => {
  const [inputs, setInputs] = useState('');
  const [updateData, setUpdataData] = useState({
    description: '',
  });
  const ondescription = (value) => {
    setUpdataData({
      ...updateData,
      description: value,
    });
  };

  const getData = async () => {
    const res = await apiGet(`family-sponsor/634046a6e4b69bca7b28e56b`).catch(
      (err) => console.log(err)
    );
    const data = await res.data;
    return data;
  };

  console.log(updateData.description);

  useEffect(() => {
    if (!inputs) {
      getData().then((data) => {
        setInputs(data.item.data);
        setUpdataData({
          description: data.item.data,
        });
      });
    }
  }, [inputs]);

  const updatePage = async () => {
    apiPut('family-sponsor/634046a6e4b69bca7b28e56b', {
      data: updateData.description,
    })
      .then(() => window.location.reload(true))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home">
      <div className="container_news">
        <div className="row">
          <form className="update__forms" onSubmit={updatePage}>
            <h3 className="myaccount-content" style={{ textAlign: 'center' }}>
              {' '}
              Family Sponsor Page
            </h3>
            <p style={{ textAlign: 'center' }}>Add page description here...</p>

            <div className="form-row">
              <div className="form-group col-md-12 editor">
                <label className="font-weight-bold">
                  {' '}
                  Description <span className="required"> * </span>{' '}
                </label>
                <EditorToolbar toolbarId={'t1'} />
                <ReactQuill
                  className="editor_des"
                  theme="snow"
                  style={{ height: '400px' }}
                  value={updateData.description}
                  onChange={ondescription}
                  placeholder={'Write something awesome...'}
                  modules={modules('t1')}
                  formats={formats}
                />
              </div>
              <br />

              <br />
              <div className="errors"> </div>
              <div className="form-group col-sm-12 text-right">
                <button type="submit" className="btn_primary ">
                  Edit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FamilySponsor;
