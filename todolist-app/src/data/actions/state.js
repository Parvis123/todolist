export const removeTask = (id) => {
	return {
    	type:"removeTask",
    	id : id,
    };
};

export const addTask = (task) => {
    return {
        type: "addTask",
        task: task,
    };
};

export const editTask = ({ title, task, tags }, id) => {
	return {
		type:"editTask",
		title: title,
		task: task,
		id: id,
	};
};



export const setTasks = tasks => {
    return {
        type: "setTasks",
        tasks: tasks,
    };
};

