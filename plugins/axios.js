// plugins/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.omdbapi.com/', // ou a URL da sua API
});

export default instance;
