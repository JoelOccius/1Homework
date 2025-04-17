import { useState } from "react";

import "./TodoForm.css";

function TodoForm({onAdd}){
    const[title, setTitle] = useState('');
    const [description, setDescripton] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!title.trim()) return;

        const newTask = {
            id: Date.now(), title, description, completed:false,
        };

        onAdd(newTask); //app la ap pase nan nouvo task
        setTitle('');
        setDescripton('');
    };

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Task Title" value={title} 
            onChange={(e => setTitle.target.value)}/>

            <textarea placeholder="Optional description" value={description}
            onChange={(e => setDescripton.target.value)}></textarea>

            <button type="submit">Add Task</button>
        </form>
    )
};
export default TodoForm;