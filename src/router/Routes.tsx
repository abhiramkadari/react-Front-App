import { Routes, Route } from "react-router-dom";

import Todos from "../pages/Todos";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";

import { MyLayout } from "../layouts/MyLayout";

const Router = () =>{
    return (
        <Routes>
            <Route element={ <MyLayout/> }>
                <Route path="/" element={ <Todos/> }/>
                <Route path="/myTodos" element={ <Todos/> }/>
                <Route path="/myUsers" element={ <Users/> }/>
                <Route path="/user/:userId/details" element={ <UserDetails/> }/>
            </Route>
        </Routes>
    )
}

export default Router