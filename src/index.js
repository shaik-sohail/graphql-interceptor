import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
const root = ReactDOM.createRoot(document.getElementById("root"));

axios.defaults.baseURL = "https://random-data-api.com/api/";

axios.interceptors.request.use((request) => {
  console.log("Sent the request");
  return request;
});

axios.interceptors.response.use((response) => {
  console.log("Recieved data ");
  return response;
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
