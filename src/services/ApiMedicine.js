import axios from "axios";

const apiMedicine = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default apiMedicine;
