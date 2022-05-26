
import React,{useState} from'react'
import UserService from'./UserService'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

const [form ,setForm]=useState({
  email:"",
  name:"",
  password:""
}
)
const saveUser=()=>{
        var userData={
                firstName:form.email,
                Name: form.name,
                password:form.password,
                status:500
                }
                console.log("entry in saveuser fun")
        UserService.saveUser(userData)
        .then((response) => {
            console.log(response.data)
            if(response.data.status == 200){
                // setSubmitted(true)
            }
        })

    }
const [count, setCount]=useState(1)
  const updateForm=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    })
  }

  
  return (
    <div className="App">
      {/* <Home/> */}
<h1>Step {count} of 3</h1>
      <form style={{backgroundColor: "lightblue"}} 
      className="col-4 form" onSubmit={()=> alert(`submitted Email: ${form.email} Name: ${form.name} Password: ${form.password}`)}>
      {count===1?(
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control"
         name="email" 
        onChange={updateForm}
         value={form.email}/>
      </div>
):null}
{count ===2?(
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control"
         name="name" 
        onChange={updateForm}
         value={form.name}/>
      </div>
):null}

{count===3?(
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control"
         name="password" 
        onChange={updateForm}
         value={form.password}/>
      </div>
      ):null}
      <button className="btn btn-primary" type="submit"onClick={saveUser}>Submit</button>
      </form>
      <button className="btn btn-dark" type="submit"
      onClick={()=> setCount(count-1)}
      disabled={count<2}
      >Back</button>
      <button className="btn btn-light" 
      type="submit"onClick={()=> setCount(count+1)}
      disabled={count>2}
      >Next</button>
    </div>
  );
}

export default App;
