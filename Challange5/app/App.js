import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"


class App extends React.Component {
    render() {
        const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
        return (
            <div className = "todo-list">
                {todoItems}
            </div>
        )    
    }
}
export default App
