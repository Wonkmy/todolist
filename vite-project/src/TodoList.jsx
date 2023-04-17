import { TodoCell } from "./TodoCell"

export default function TodoList({todos,toggleTodo,deleteTodo}){
    return(
        <ul className='list'>
        {todos.length==0 && "No Todos"}
        {todos.map(todo => {
          return (
            <TodoCell {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          )
        })}
      </ul>
    )
}