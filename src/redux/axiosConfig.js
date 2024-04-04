import axios from 'axios';

const setAxiosBaseURL = () => {
  axios.defaults.baseURL = 'https://wallet.b.goit.study';
};

const setAxiosHeader = () => {
  const savedDataLocal = JSON.parse(localStorage.getItem('persist:auth'));

  const savedToken =
    savedDataLocal?.token === 'null'
      ? null
      : savedDataLocal?.token.slice(1, -1);

  axios.defaults.headers.common.Authorization = savedToken;
};

const clearAxiosHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

const axiosConfig = {
  setAxiosBaseURL,
  setAxiosHeader,
  clearAxiosHeader,
};

export default axiosConfig;