import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ tasks, onToggle, onRemove }) {
    return (
        <div className="todo-list">
            {tasks.length === 0 ? (
                <p className='empty'>You're caught up!</p> 
            ) : (
                tasks.map((task) => ( 
                    <TodoItem
                        key={task.id}
                        task={task}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))
            )}
        </div>
    );
}

export default TodoList;