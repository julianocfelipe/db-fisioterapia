import axios from 'axios';
import qs from 'qs';

const BrasilAPIConfig = axios.create({
  headers: {
    post: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  baseURL: 'https://brasilapi.com.br/api',

  transformResponse: [
    function (data) {
      return data;
    },
  ],
  paramsSerializer: (params) => qs.stringify(params),
});

export default BrasilAPIConfig;
