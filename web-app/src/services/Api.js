import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

export const Api = {
  get: async function (url, params = {}) {
    return await axios.get(url, {
      params,
    });
	},
	post: async function (url, data) {
		return await axios.post(url, data);
	},
	put: async function (url, data) {
		return await axios.put(url, data);
	},
}