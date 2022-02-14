import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ADD_TASK } from "../reducer/actions";
import { TODO_TASK_LIST } from '../../../consts/RoutePath'
import { HighlightWithinTextarea } from 'react-highlight-within-textarea'
import './AddTodo.css'


const AddTodo = () => {
    const [todoTask, setTodoTask] = useState('');
    const [currentLimit, setCurrentLimit] = useState(0);
    const totalLimit = 100;
    const dispatchAction = useDispatch();
    const navigate = useNavigate();

    const onChange = (val) => {
        setTodoTask(val);
        setCurrentLimit(val.length);
    }

    const  getCallbackFromHighLightTextarea = (text,callback) => {
        if(text.length > totalLimit) {
            callback(totalLimit,text.length)
        }
    }

    const updateTodoList = () => {
        if(todoTask) {
            dispatchAction({type: ADD_TASK,
            payload : {
                id: Math.floor(Math.random() * 1000),
                task: todoTask,
                createdDt: new Date()
            }
          });
          navigate(TODO_TASK_LIST);
        } else {
            console.error('Cannot dispatch as todoTask is empty');
        }
    }
    return (
        <div>
            <div className="text-highlight"> 
            <form>
            <div className="form-group">
                <HighlightWithinTextarea
                    value={todoTask}
                    onChange= {onChange}
                    placeholder={''}
                    highlight={getCallbackFromHighLightTextarea}
                /></div>
                </form>
                </div>
            { /* <textarea value={todoTask} onChange={(evt) => onChange(evt)}></textarea> */}
            <div className="submitButton">
            <button onClick={updateTodoList}>SUBMIT</button><span className="limit">{currentLimit}/{totalLimit}</span>
            </div>
        </div>
    )
}

export default AddTodo;