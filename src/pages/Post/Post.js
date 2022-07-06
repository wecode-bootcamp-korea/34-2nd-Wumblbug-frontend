import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PostMain from './PostMain';
import Default from './Components/Default/Default';
import Funding from './Components/Funding/Funding';
import axios from 'axios';

const Post = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState(1);
  const [image, setImage] = useState({});
  const [info, setInfo] = useState({
    category: 1,
    title: '',
    summary: '',
    target_amount: 0,
    start_datetime: '',
    end_datetime: '',
  });

  useEffect(() => {
    setInfo({
      ...info,
      start_datetime: startDate,
      end_datetime: endDate,
      category,
    });
  }, [startDate, endDate, category]);

  const saveInfo = (e, number) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: number ? Number(value) : value });
  };

  console.log(info);

  const token = localStorage.getItem('token');
  const sendAllInfo = async () => {
    const formData = new FormData();
    formData.append('category', info.category);
    formData.append('title', info.title);
    formData.append('summary', info.summary);
    formData.append('target_amount', info.target_amount);
    formData.append('start_datetime', info.start_datetime);
    formData.append('end_datetime', info.end_datetime);
    formData.append('formData', image);

    const headers = {
      Authorization: token,
      'Content-Type': 'multipart/form-data',
    };

    // await axios.post(
    //   'http://10.58.4.47:3000/projects/upload',
    //   formData,
    //   headers
    // );

    await axios({
      url: 'http://10.58.4.47:3000/projects/upload',
      method: 'POST',
      data: formData,
      headers,
    });
  };

  return (
    <>
      <PostMain sendAllInfo={sendAllInfo} />
      <Routes>
        <Route
          path="/"
          element={
            <Default
              info={info}
              setInfo={setInfo}
              saveInfo={saveInfo}
              category={category}
              setCategory={setCategory}
              setImage={setImage}
            />
          }
        />
        <Route
          path="/funding"
          element={
            <Funding
              info={info}
              setInfo={setInfo}
              saveInfo={saveInfo}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Post;
