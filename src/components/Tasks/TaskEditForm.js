import React, {Component} from 'react'


export default class TaskForm extends Component {
    state = {
        task: " ",
        isComplete: " ",
        userId: " "
    };
    // handleFieldChange is a method that sets state to the whatever the value of the input field is.
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    // Over here we are making our new task object! How cool! We're making sure the user can't refresh with preventDefault. We're also sneaking into sessionStorage and grabbing our user's ID to be able to assign that task to them. 
    constructNewTask = (event) => {
            event.preventDefault()
            const newTask = {
            task: this.state.task,
            isComplete: "",
            userId: parseInt(sessionStorage.getItem("userID"))
        }
        this.props
        // Over here we're posting our 
        .addTask(newTask)
        .then(()=>this.props.history.push("/tasks"))
    }
    render () {
        return (
            <React.Fragment>
                <form onSubmit={this.constructNewTask} className="taskForm">
                    <div className="task-div">
                        <label htmlFor="task">Task: </label>
                        <input
                        type="text"
                        required
                        className="taskFormInput"
                        onChange={this.handleFieldChange}
                        id="task"
                        value={this.state.task}
                        placeholder="Task Name"></input>
                    </div>
                <button
                type="submit"
                className="btn btn-primary">
            Submit
                </button>
                </form>
            </React.Fragment>
        )
    }
}