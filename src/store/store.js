import { createStore } from "redux";
import reducer from "../components/todo-task-list/reducer/reducer";

 export const AppStore = createStore(reducer);