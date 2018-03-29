import React, { Component } from 'react';
import Form from './Form';
export class TaskItem extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	editable: false,

	  };
	}

	onEdit() {

	}

	onChange(e) {
		const task = this.state.task // slice
        const newvalue = e.target.value;
        this.setState({ task: newvalue });
	}

	onClick() {

	}

	render(edit, onSubmit, id) {

		const {editable} = this.state;

		return (
			<div>
				{(editable ? 
					<Form 
						buttonLabel={edit}
						onSubmit={onSubmit}
						id={id}
					/>
					: 
					<p>{id}</p>)}
			</div>
			);
	}
}

export default TaskItem;
