// import our axios config file
import axios from "../axios";
import { fromJS } from "immutable";
import { setTasks, addTask, setTask, removeTask, editTask } from "./state";

export const getTasks = () => dispatch => {
    axios.get("/tasks").then(response => {
    	// wrap the response.data with fromJS to convert it into an Immutable List
        const Tasks = fromJS(response.data);
        // dispatch the setTasks action, passing along the Tasks List
        dispatch(setTasks(Tasks));
    });
};

// export const putTask = (data) => dispatch => {
// 	axios.put("/tasks/" + id).then(() => {
// 		dispatch(updateTask(id, task));
// 	});
// };

// export const patchTask = (id) => dispatch => {
// 	axios.patch("/tasks/" + id).then(() => {
// 		dispatch(setTask(id));
// 	});
// };

export const postTask = (data) => dispatch => {
	//post Task data
	console.log(data)
	axios.post("/tasks", {
		task: data
	}).then(response => {
		const task = fromJS(response.data);
		// dispatch the addTask action, passing along the Task Map
		dispatch(addTask(task));
	});
};

// export const deleteTask = (id) => dispatch => {
// 	axios.delete("/tasks/" + id).then(() => {
// 		dispatch(removeTask(id));
// 	});
// };