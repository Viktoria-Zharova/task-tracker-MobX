import React from 'react';
import { observer } from 'mobx-react';
import { useTaskStore } from '../contexts/TaskContext';

const TaskList: React.FC = observer(() => {
    const taskStore = useTaskStore();

    const handleDeleteTask = (index: number) => {
        taskStore.deleteTask(index);
    };

    const handleToggleTask = (index: number) => {
        taskStore.toggleTask(index);
    };

    return (
        <ul>
            {taskStore.tasks.map((task, index) => (
                <li key={index}>
                    <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(index)} />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
});

export default TaskList;