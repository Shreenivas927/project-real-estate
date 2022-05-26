
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
const[submitted,setSubmitted]=useState(false);
const saveUser=()=>{
        var userData={
                email:form.email,
                name: form.name,
                password: form.password
                // status:500
                }
                // console.log("entry in saveuser fun")
                console.log(userData)
        UserService.saveUser(userData)
        // .then((response) =>response.json())
        .then(res=>{
          // console.log("enter in res front")
          console.log(res.data)
            if(res.data.status == 200){
// console.log("entry pre to status code")
                setSubmitted(true)
            }

        }) 

          // console.log("entry pre to status code")
            
        

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
    { submitted ? (
                            <div> 
                                User Added Successfully......
                            </div>
    
                        ):(
                          <div>
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
        <button className="btn btn-primary" type="button" onClick={saveUser}> Submit </button>
      </form>
        <button className="btn btn-dark" type="submit"
        onClick={()=> setCount(count-1)}
        disabled={count<2}
      >
      Back
      </button>
      <button className="btn btn-light" 
      type="submit"onClick={()=> setCount(count+1)}
      disabled={count>2}
      >Next</button>

                          </div>
    
                        )
                        }
    </div>
  );
}

export default App;
