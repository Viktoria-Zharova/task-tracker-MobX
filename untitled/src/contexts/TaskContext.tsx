import React, { createContext, useContext } from 'react';
import {TaskStore} from '../stores/TaskStore';

const TaskContext = createContext<TaskStore>(new TaskStore());

export const TaskProvider: React.FC = ({ children }) => {
    const taskStore = new TaskStore();
    return <TaskContext.Provider value={taskStore}>{children}</TaskContext.Provider>;
};

export const useTaskStore = () => useContext(TaskContext);