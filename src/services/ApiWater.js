import axios from "axios";

const apiFooter = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default apiFooter;
