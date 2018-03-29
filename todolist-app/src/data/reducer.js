//import initial from './initial';
import { Map, List } from "immutable";


// const createTask = ({ task }) => {

//     return task.merge({
//         comments: List(),
//         tags: List(),
//     });
// };





const addTask = (state, action) => state.update("tasks", tasks => tasks.push(action.task));

// const removeTask = (state, { id }) => state.update("tasks", tasks => tasks.delete(id));


// const editTask = (state , { title, task, tags, id }) => {
//     return state.update("tasks", tasks => tasks.map(a => (a.get("id") === id) ? 
//             a.set("title", title).set("task", task).set("tags", tags) : a));
// }



const setTasks = (state, { tasks }) => state.set("tasks", tasks);


const reducer = (state, action) => {
    switch (action.type) {
        case "addTask": return addTask(state, action);
        // case "removeTask": return removeTask(state, action);
        // case "editTask": return editTask(state, action);
        case "setTasks": return setTasks(state, action); 
        default: return state;
    }
}

export default reducer;