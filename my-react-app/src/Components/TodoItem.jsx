import './TodoItem.css';

function TodoItem({ task, onToggle, onRemove }) {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="todo-text">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <div>
          <h3>{task.title}</h3>
          {task.description && <p>{task.description}</p>}
        </div>
      </div>
      <button
        onClick={() => onRemove(task.id)}
        aria-label="Delete task"
        className="delete-button"
      >
        ✖
      </button>
    </div>
  );
}

export default TodoItem;
