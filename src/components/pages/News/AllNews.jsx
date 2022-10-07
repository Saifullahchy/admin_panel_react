import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { apiGet, apiDelete } from '../../../utils/api';

const AllNews = () => {
  const [serverData, setData] = useState('');
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await apiGet('news');
      const data = await res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (id) => {
    try {
      await apiDelete(`news/${id}`).then(() => window.location.reload(true));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!serverData) {
      getData().then((data) => {
        setData(data.news);
      });
    }
  });

  const handleEdit = (id) => {
    navigate(`editnews/${id}`);
  };

  return (
    <>
      {
        <div className="home">
          <div className="container_news">
            <div className="row">
              <div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Title</th>

                      <th className="w-25">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serverData &&
                      serverData.map((item, idx) => {
                        return (
                          <tr key={idx} style={{ height: '70px' }}>
                            <td>{item.title}</td>
                            {/* <td
                              dangerouslySetInnerHTML={{
                                __html: `${item.description.substring(0, 200)}`,
                              }}
                            ></td> */}
                            <td
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '70px',
                              }}
                            >
                              <button
                                style={{
                                  background: '#0f0f0f',
                                  color: '#FFF',
                                  width: '64px',
                                  borderRadius: '4px',
                                }}
                                onClick={() => handleEdit(item._id)}
                              >
                                Edit
                              </button>
                              <Delete
                                style={{
                                  fontSize: '30px',
                                  marginLeft: '30px',
                                  textAlign: 'center',
                                  cursor: 'pointer',
                                  color: '#991A1E',
                                }}
                                onClick={() => {
                                  deleteItem(item._id);
                                }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default AllNews;
