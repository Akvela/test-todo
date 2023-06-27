import { v4 as uuidv4 } from "uuid";

export const todoModule = {
    state: () => ({
        taskList: [{id: 0, title: 'Посмотреть фильм', isActive: false}]
    }),
    mutations: {
        editTask(state, id) {
            state.taskList = state.taskList.map(task => {
                if (task.id === id) {
                    task.isActive = true;
                }
                return task;
            })
        },

        addTask(state, title) {
            state.taskList = [...state.taskList, { id: uuidv4(), title, isActive: false }]
        },

        saveTask(state, { id, value }) {
            state.taskList = state.taskList.map(task => {
                if (task.id === id) {
                    task.title = value;
                    task.isActive = false;
                }
                return task;
            })
        },

        deleteTask(state, id) {
            state.taskList = state.taskList.filter(task => task.id !== id);
        }
    }
}