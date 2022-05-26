import http from './http-call'

const saveUser = (userData) => {

    console.log(userData)
    
    return http.post("/savedata",userData)
}
const getAll = (data)=>{
    return http.get("/getUSers")
}

export default {
   saveUser
}