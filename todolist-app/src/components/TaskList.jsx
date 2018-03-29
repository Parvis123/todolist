import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
	// console.log(tasks.toJS());

    componentDidMount() {
        this.props.onLoad();
    } 
	render () {
		const { tasks } = this.props;
		return (
	            <div>
	                { /* check there are tasks to show */ }
	                { tasks.count() ?
	                    <ul className="list-group">
	                        { /* map over each task and display a list item for each one */ }
	                        { tasks.map(task => (


	                            <li className="list-group-item" key={ task.get("id")}>
	                                { /* link to the task using its id */ }
	                                { task.get('task')}
	                                <TaskItem id={ task.get("id") }/>
	                            </li>
	                        ))}
	                    </ul>
	                    :
	                    <p>Please create a task!</p>
	                }
	            </div>
			);
	}
};

export default TaskList;




