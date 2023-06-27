import { createStore } from "vuex";
import { todoModule } from "./todoModule";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
    modules: {
        todoList: todoModule
    },
    plugins: [createPersistedState()],
})