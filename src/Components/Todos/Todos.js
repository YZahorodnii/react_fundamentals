import React, {useEffect, useState} from 'react';
import Todo from "../Todo/Todo";
import {todoService} from "../../services/todo.service";


const Todos = () => {
     const [todos, setTodos] = useState([]);
     useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/todos').then(value => value.json()).then(value => setTodos(value))
     }, [])
    return (
        <div>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default Todos;