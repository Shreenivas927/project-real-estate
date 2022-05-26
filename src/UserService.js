import http from './http-call'

const saveUser = (userData) => {

    console.log(userData)
    
    return http.post("/savedata",userData)
    
}
const getAll = (data)=>{
    // console.log(data)
    return http.get("/getusers")
}
const deleteUser = (values) => {
    // console.log(" from userservice delete record")
    console.log(values)
    // console.log(" from userservice delete record")
     return http.post("/deleteUser", values)
     
     console.log(" from userservice delete record")
 }
 
 const update = (userdata) => {
     return http.post("/update", userdata)
 }
 
 const getUserById = (id) => {
    // console.log("entry in user services")
     return http.get(`/getUserById/${id}`)
 }
 
 const ex = {
    saveUser,
    getAll,
    deleteUser,
    update,
    getUserById
 }
 
 export default ex