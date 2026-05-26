import axios from "axios";

const api = axios.create({
  baseURL:
    "https://picklestore-backend.onrender.com",
});

export default api;