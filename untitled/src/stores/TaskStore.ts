import { makeAutoObservable, action } from 'mobx';

export class TaskStore {
    tasks = [];

    constructor() {
        makeAutoObservable(this);
    }

    @action
    addTask(text: string) {
        this.tasks.push({ text, completed: false });
    }

    @action
    deleteTask(index: number) {
        this.tasks.splice(index, 1);
    }

    @action
    toggleTask(index: number) {
        this.tasks[index].completed = !this.tasks[index].completed;
    }
}

export default TaskStore;