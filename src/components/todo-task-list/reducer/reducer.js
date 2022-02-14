import { ADD_TASK } from "./actions";

 const initState = {
    todoList : JSON.parse(localStorage.getItem('todoList') || '[]')
}
function reducer(state = initState, action){
    console.log(action);
switch (action.type) {
    case ADD_TASK :
        const dataFromStorage = [...state.todoList];
        dataFromStorage.push(action.payload);
        localStorage.setItem('todoList', JSON.stringify(dataFromStorage));
        return {
        ...state,
        todoList : dataFromStorage
        };
    default:
      return state;
  }
}

export default reducer;