import http from '../newfrontend/http1-call'
const saveUser=(userData)=>{
  console.log(userData)
        // console.log(userData)
       return http.post("/savedata",userData)

    }

const getAll = () => {
return http.get("/getusers")

}

const deleteUser = (values) => {
   // console.log(" from userservice delete record")
   console.log(values)
   // console.log(" from userservice delete record")
    return http.post("/deleteUser", values);
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