<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Desenvolvedor Web Júnior
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 600;
  font-size: 2.6rem;
  position: relative;
}

h3 {
  font-size: 1.2rem;
  margin-top: -1%;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

</style>
