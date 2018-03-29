import { connect } from 'react-redux';
import TaskList from '../components/Form';
import { getTasks, postTask } from '../data/actions/api';


const mapStateToProps = state => {
	return {
		onClick: state.get('tasks'),
	};
};


const mapDispatchToProps = dispatch => {
	return {
		onSubmit: (data) => dispatch(postTask(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);