import axios from 'axios'
export default axios.create({
    baseURL:"http://localhost:8787/api",header:{
        "Content-type":"application/json"
    }
});