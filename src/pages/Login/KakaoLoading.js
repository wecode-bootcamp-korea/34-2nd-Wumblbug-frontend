import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
import { LOGIN_URL } from '../../config';
import Loading from '../../components/Loading/Loading';

const KakaoLoading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const code = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }).code;

  useEffect(() => {
    axios.post(`${LOGIN_URL}/users/signin/kakao`, { code }).then(res => {
      localStorage.setItem('token', res.data.token);
      res.data.token ? navigate('/main') : alert('로그인에 실패하였습니다.');
    });
  }, []);

  return <Loading />;
};

export default KakaoLoading;
