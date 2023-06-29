import axios from 'axios';
import qs from 'qs';

const Config = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  baseURL: 'http://localhost:3000/',

  transformResponse: [
    function (data) {
      return data;
    },
  ],
  paramsSerializer: (params) => qs.stringify(params),
});

export default Config;
