import TodoList from "./TodoList";
import {useState} from "react";
import "./Todo.css"
function Todo() {
    const [todoList, setTodoList] = useState([]);
    const concatTodoList = (todo) => {
      setTodoList(todoList.concat(todo))
    }

    const [text, setText] = useState('');
    const handleText = (e) => {
        setText(e.target.value)
    }

    const refreshText = () => {
      setText('')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length === 0) {
            return;
        }
        const newItem = {
            text: text,
            id: Date.now()
        }
        concatTodoList(newItem)
        refreshText()
    }
    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todoList={todoList}/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-todo">
                    What needs to be done?
                </label>
                <input id="new-todo"
                       onChange={handleText}/>
                <button>
                    Add
                </button>
            </form>
        </div>
    )

}

export default Todo
