import React from "react"

class TodoItem extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" checked = {this.props.item.completed} onClick="handleCheck(this)"/>
                <p>{this.props.item.text}</p>
            </div>
        )
    
    }

    handleCheck(control) {
        if (control.checked == true) {
            control.checked = false;
        } else {
            control.checked = true;
        }
    }
}
export default TodoItem
