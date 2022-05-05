import axios from "axios";

const authAxios = axios.create({
    baseURL:"http://localhost:9090/main"
})

authAxios.defaults.headers.common["SomeTHING"] = "something!!!"

export default authAxios;
