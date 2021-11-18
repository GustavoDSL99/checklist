import axios from "axios";

const api = axios.create({
    baseURL: "https://6189ac5cd0821900178d7aa3.mockapi.io/checklist",
    responseType: "json"
})

export default api;