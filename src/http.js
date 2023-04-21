import axios from "axios";
export default axios.create({
    baseURL:"http://localhost/selfrecoveryapi/api",
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})