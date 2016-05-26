import { createContainer } from 'meteor/react-meteor-data';
import { Tasks } from '../../api/tasks.js';
import ListPage from '../pages/ListPage.jsx';

export default createContainer(() => {
	return {
		tasks: Tasks.find({}, { sort: {createdAt: -1 } }).fetch(),
		incompleteCount: Tasks.find({ checked: { $ne: true } }).count()
	};
}, ListPage);