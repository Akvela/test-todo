<template>
  <div class="task-input list">
    <input v-model="title" placeholder="Title" type="text">
    <button @click="onAddTask">Add task</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props, { emit }) {
    const title = ref('');

    const onAddTask = () => {
      if (title.value !== '') {
        emit('onAddTask', {title: title.value});
      } else {
        alert('Заполните поле, пожалуйста');
      }
      title.value = '';
    }

    return { title, onAddTask };
  }
}
</script>

<style scoped>
  .task-input {
    margin: 10px 0;
  }
</style>