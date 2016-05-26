import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Tasks } from '../../api/tasks.js';
import Task from '../components/Task.jsx';
 
export default class ListPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hideCompleted: false
		};
	}

	handleSubmit(event) {
		event.preventDefault();

		// Find the text field via the React ref
		const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

		Tasks.insert({
			text,
			createdAt: new Date()
		});

		// Clear form
		ReactDOM.findDOMNode(this.refs.textInput).value = '';
	}

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  renderTasks() {
  	let tasks = this.props.tasks;

    if (this.state.hideCompleted) {
      tasks = tasks.filter(task => !task.checked);
    }

    return tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>
        </header>
 
         <label className="hide-completed">
          <input
            type="checkbox"
            readOnly
            checked={this.state.hideCompleted}
            onClick={this.toggleHideCompleted.bind(this)}
          />
          Hide Completed Tasks
        </label>

        <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
          <input type="text" ref="textInput" placeholder="Type to add new tasks" />
        </form>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

ListPage.propTypes = {
	tasks: PropTypes.array.isRequired,
	incompleteCount: PropTypes.number.isRequired
};