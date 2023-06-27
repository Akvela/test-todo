<template>
  <div class="task-item task">
    <div>
      <h4 v-if="!model.isActive">{{model.title}}</h4>
      <input type="text" v-model="inputEdit" class="task-item__input" v-else>
    </div>
    <div class="task-item__buttons">
      <button @click="emitOnEdit" class="task-item__button task-item__button_type_edit" v-if="!model.isActive"></button>
      <button @click="onSave" class="task-item__button task-item__button_type_save" v-else></button>
      <button @click="emitOnRemove" class="task-item__button task-item__button_type_remove"></button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  emits: ['emitOnEdit', 'onRemove', 'onSave'],
  props: {
    model: {
      required: true,
      default: {
        id: 0,
        title: 'Посмотреть фильм',
        isActive: false
      }
    }
  },
  setup(props, { emit }) {
    const inputEdit = ref(props.model.title);

    const emitOnEdit = () => {
      emit('onEdit');
    }

    const emitOnRemove = () => {
      emit('onRemove');
    }

    const onSave = () => {
      emit('onSave', props.model.id, inputEdit.value);
    }

    return { inputEdit, emitOnEdit, emitOnRemove, onSave };
  }
}
</script>

<style scoped>
  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0;
  }

  .task-item__input {
    background-color: #dddddd;
    width: 530px;
    display: block;
  }

  .task-item__buttons {
    display: flex;
    gap: 5px;
  }

  .task-item__button {
    display: block;
    width: 24px;
    height: 24px;
    border: none;
  }

  .task-item__button_type_edit {
    background-image: url("../assets/pencil.png");
  }

  .task-item__button_type_remove {
    background-image: url("../assets/hospital-signal.png");
  }

  .task-item__button_type_save {
    background-image: url("../assets/yes.png");
  }
</style>