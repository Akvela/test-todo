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
            state.taskList = [...state.taskList, { id: state.taskList[state.taskList.length - 1].id + 1, title, isActive: false }]
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