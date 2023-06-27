<template>
  <main class="main">
    <h1>TODO LIST</h1>
    <p><a href="/todo" class="main__link">Список задач &#10513;</a></p>
  </main>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
  .main {
    padding: 150px 0;
  }

   .main__link {
     text-decoration: none;
     color: black;
     display: block;
     padding: 50px 0;
   }
</style>