import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./App.css'

function ToDo(){
    const[todos,setTodos] = useState([])
    const [todo,setTodo]=useState("")
    const [todoEdting,setTodoEditing]=useState()
    const [editingText, seteditingText] = useState("")

    React.useEffect(() => {
        const temp = localStorage.getItem('todos')
        const loadedTodos = JSON.parse(temp)
         if(loadedTodos) {
            setTodos(loadedTodos)
        }
    }, [])

    function handleSubmit(e){
e.preventDefault()
const newtodo = {
    id:new Date().getTime(),
    text:todo,
    completed:false,
}
setTodos([...todos].concat(newtodo))
setTodo("")
    }
    function deleteTodo(id){
        const updatedTo = [...todos].filter((todo)=>todo.id!==id)
        setTodos(updatedTo)

    }
    function togglerComplete(id){
        const updatedTo = [...todos].map((todo)=>{
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTo)
    }
    function editTodo (id){
        const updatedTo = [...todos].map((todo)=>{
            if(todo.id===id){
                todo.text=editingText
            }
            return todo
        })
        setTodos(updatedTo)
        setTodoEditing(null)
        seteditingText("")
    }
return(
    <div className="row">
        <form onSubmit={handleSubmit} className="form-input">
            <h1>Simple Curd Operation</h1>
            <input type="text"className="inputtext"onChange={(e)=> setTodo(e.target.value)} value={todo}/><br/>
            {/* <button type="submit">Add</button> */}
            <Button variant="primary"type="submit">Add</Button>
        </form>
        <div className="Alllist">
        {todos.map((todo) => 
            <div key={todo.id} className="bottomAlllist">
            {todoEdting === todo.id ?

            (<input 
            type="text"onChange={(e)=>seteditingText(e.target.value)} 
            value={editingText}/>
            
            ):(
            <div className="todo-list">{todo.text}</div>
            )}
            <div className="container">
            <div className="row">
            <div className="button">
               <div className="col-md-6"> <br/><button type="Submit"onClick={()=>deleteTodo(todo.id)}>delete</button></div>
                <div className="col-md-8"><input type="checkbox"onChange={()=>togglerComplete(todo.id)}
                checked={todo.completed}/></div>
                

                {todoEdting===todo.id
                ?
                (<button onClick={()=>editTodo(todo.id)}>submit Edit</button>):(<button onClick={()=>setTodoEditing(todo.id)}>Edit</button>)}
                
                </div>
                </div>
                </div>
            </div>
           
        )}
        </div>
        </div>
)
}
export default ToDo