import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-complaint-backend-0cdq.onrender.com/api",
});

export default API;