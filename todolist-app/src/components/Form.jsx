import React, { Component } from 'react';

class Form extends Component {

	constructor(props) {
	  super(props);
	  this.submit = this.submit.bind(this);
	  this.state = {
	  	task: ''
	  };
	}

	change(e) { // need i maybe
        const task = this.state.task // slice
        const newvalue = e.target.value;
        this.setState({ task: newvalue });
    }

	submit(e) {
        e.preventDefault();

        // for each field use the name as a key and the value as a value
        // don't need the label
        let data = this.state.task;
        console.log(data)
        this.props.onSubmit(data);
	}

	render() {
		const { task } = this.state;
		return (
			<div>
				<form onSubmit={ this.submit }>
					<input 
					    onChange={ e => this.change(e) }
						type="text" 
						placeholder="What task would you like to add?"
						value= { task }
					>	
					</input>
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}

export default Form;
