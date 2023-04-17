export function TodoCell({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                <span>
                    {title}
                </span>
            <img src="../public/icon.png" alt="" className="todo-headicon"/>
            </label>
            <button
                onClick={() => deleteTodo(id)}
                className='btn btn-danger'>
                Delete
            </button>
        </li>
    )
}