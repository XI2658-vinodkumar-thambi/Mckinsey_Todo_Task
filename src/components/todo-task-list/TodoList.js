import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { TODO_TASK_ADD } from '../../consts/RoutePath'
import './TodoList.css'

function TodoList() {

  let todoListStore = useSelector(state => state.todoList);
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    setTodoList(todoListStore.sort((o1,o2) => new Date(o2.createdDt) - new Date(o1.createdDt) ))
  }, [todoListStore]);
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(TODO_TASK_ADD);
  }
  return (
    <div className='task-list'>
      <h2>ALL TO-DOS</h2>
      <div className='tasklistMain'>
      <div className='taskList-thumb'>
      {todoList && todoList.length > 0 ? todoList.map((item,index) => {
         return (
          <div key={item.id} className="task-item">
            {item.task}
          </div> 
         )
      }) : <div className='nodos'>No TO-DOs Available</div>}
      </div>
      </div>
      <div className='createButton'>
        <button onClick={navigateTo}>Create New</button>
      </div>
    </div>
  )
}

export default TodoList
