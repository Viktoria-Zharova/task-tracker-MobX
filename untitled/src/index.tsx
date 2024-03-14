import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { TaskProvider } from './contexts/TaskContext';
import TaskStore from './stores/TaskStore';
import App from './App';
import './styles/index.css';

const taskStore = new TaskStore();

ReactDOM.render(
    <Provider taskStore={taskStore}>
        <TaskProvider>
            <App />
        </TaskProvider>
    </Provider>,
    document.getElementById('root')
);