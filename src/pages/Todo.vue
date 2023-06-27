<template>
  <main>
    <p><a href="/" class="link">Вернуться на главную страницу</a></p>
    <TaskInput @onAddTask="addTask"></TaskInput>
    <ul class="task-list list">
      <li v-for="item in store.state.todoList.taskList" :key="item.id">
        <TaskItem @onRemove="setRemoveTask(item.id)" @onEdit="editTask(item.id)" @onSave="setSaveTask" :model="item"></TaskItem>
      </li>
    </ul>
  </main>
</template>

<script>

import TaskInput from "../components/TaskInput.vue";
import TaskItem from "../components/TaskItem.vue";
import { store } from "../store/index.js";

export default {
  name: 'App',
  components: {
    TaskItem,
    TaskInput
  },
  setup() {
    const addTask = ({ title }) => {
      store.commit('addTask', title);
    }

    const editTask = (id) => {
      store.commit('editTask', id);
    }

    const setSaveTask = (id, value) => {
      if (value !== '') {
        store.commit('saveTask', { id, value });
      } else {
        alert('Поле не может быть пустым');
      }
    }

    const setRemoveTask = (id) => {
      store.commit('deleteTask', id);
    }

    return { store, addTask, editTask, setRemoveTask, setSaveTask };
  }
}
</script>

<style scoped>
  .task-list {
    list-style: none;
  }

  .link {
    text-decoration: none;
    color: black;
    display: block;
    padding: 50px 0 15px;
    font-size: 12px;
  }
</style>