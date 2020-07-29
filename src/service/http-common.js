import axios from "axios";

const http = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    "Content-type": "application/json"
  }
});

http.interceptors.request.use((request) => {
  document.getElementById("divSpinner").style.display = "block";

  return request;
});

http.interceptors.response.use(response => {
  document.getElementById("divSpinner").style.display = "none";

  return response;
},
(error) => {
  document.getElementById("divSpinner").style.display = "none";
  console.log('error');

  return Promise.reject( error );
});

export default http;