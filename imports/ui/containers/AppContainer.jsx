// createContainer (from react-meteor-data) looks like the interface
// between Meteor Collections and React
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../../api/tasks.js';
import App from '../layouts/App.jsx';

export default createContainer(() => {
	return {
		tasks: Tasks.find({}, { sort: {createdAt: -1 } }).fetch(),
		incompleteCount: Tasks.find({ checked: { $ne: true } }).count()
	};
}, App);