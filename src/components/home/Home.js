import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router";
import TodoList from "../todo-task-list/TodoList";
import "./Home.css";
import aditi from '../../images/aditi.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import AddTodo from "../todo-task-list/add-todo-task/AddTodo";
import { TODO_TASK_ADD, TODO_TASK_LIST } from '../../consts/RoutePath'

function Home() {

    const [date] = useState(new Date());
     
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4">
            <div className="customerInfo">
                <div className="customerPro">
                    <img src={aditi}/>
                <h2>HI, ADITI</h2>
                <Moment format="HH:mma 
                DD MMMM,YYYY">
                    {date}
                </Moment>
                </div>
            </div>
            </div>
            <div className="col-md-8">
            <div className="todoMain">
                <div className="todoMainThumb">
                <Routes>
                    <Route path="/" element={<TodoList />} />
                    <Route path={TODO_TASK_LIST} element={<TodoList />} />
                    <Route path={TODO_TASK_ADD} element={<AddTodo />} />
                </Routes>
            </div>
            </div>
            </div>
            </div>
        </div>

    )
}

export default Home;