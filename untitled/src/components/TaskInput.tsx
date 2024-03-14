import React, { useState } from 'react';
import { useTaskStore } from '../contexts/TaskContext';

const TaskInput: React.FC = () => {
    const [taskText, setTaskText] = useState<string>('');
    const taskStore = useTaskStore();

    const handleEnterTask = () => {
        if (taskText.trim() !== '') {
            taskStore.addTask(taskText);
            setTaskText('');
        } else {
            alert('Add your task, please');
        }
    };

    return (
        <div>
            <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
            <button onClick={handleEnterTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;