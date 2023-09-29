<script>
var message = "Olá mundo - teste!";
</script>

<template>
  <div id="event-handling">
    <p>{{message}}</p>
    <button @click="this.message.split('').reverse().join('')">Inverter Mensagem</button>
  </div>
</template>

<style>
</style>
