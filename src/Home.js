import React from "react";
// import Search from"./Search"
import List1 from "./newfrontend/List1"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import Addinput from"./newfrontend/Addinput"
import "bootstrap/dist/css/bootstrap.min.css"
// import Update from "./Update"
// import UpdateUser from "./newfrontend/UpdateUser";
import UpdateUser from './newfrontend/UpdateUser'
import AddUser from './AddUser'
import Homeinfo from "./Homeinfo";

function Home() {

    return (
        <div>
            {/* <h1>This is home page</h1> */}
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a href="users" className="navbar-brand">Navbar</a>
                        {/* <h2></h2> */}
                        <div className="navbar-nav">
                            <li className="nav-item ">
                                <Link to="/Homeinfo" className="nav-link">Home</Link>

                            </li>
                            <li className="nav-item ">
                                <Link to="/AddUser" className="nav-link">Add User</Link>
                               
                            </li>
                            <li className="nav-item">
                                <Link to="/UserList" className="nav-link">Show Users</Link>
                               
                            </li>
                            
                        </div>

                    </nav>
                    <div className="container">
                        <Switch>
                            <Route exact path="/UserList">
                                <List1 />
                            </Route>
                            <Route path="/Homeinfo">
                                <Homeinfo />
                            </Route>
                            <Route path="/AddUser">
                                <AddUser />
                            </Route>
                            <Route path="/updateUser/:id">
                                <UpdateUser />
                            </Route>
                            {/* <Route path= "/updateUser/:id">
                                <UpdateUser/>
                            </Route> */}
                            {/* <Route path="/AddUser" component={AddUser}/> */}
                        </Switch>
                    </div>

                </div>
            </BrowserRouter>
            {/* <Search/> */}
        </div>
    )
}
export default Home;
