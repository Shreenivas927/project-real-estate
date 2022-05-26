import React,{ useState,useEffect } from"react"
import UserService1 from"./UserService1"

function List () {

    const [userData, setUserData] = useState([])
    useEffect(()=>{
        UserService1.getAll()
        .then(response=>{
            setUserData(response.data)
        })
    },[])
    return(
        <div className="col-md-6">
        <h2>User List</h2>
            <ul className="list-group">
            {
                userData.map((user)=>(
                    <li>User Name</li>
                    <li className="list-group-item" key={user.id}>
                    {user.firstName + " " +user.lastName}
                    </li>
                ))
            }
            </ul>
        </div>
    )
    
}
export default List