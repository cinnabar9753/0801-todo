import './ToDoList.css'
function TodoList(props) {
    const {todoList} = props;
    return(
        <ul>
            {todoList.map(item =>(
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default TodoList
