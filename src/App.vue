<template>
  <section class="section">
    <div class="container">
      <img class="logo" src="/vite.svg">
      <h1 class="title">Vite & Vue2 & Buefy</h1>      
      <b-button type="is-success" @click="clickMe">Click me!</b-button>
      <p class="subtitle">Find out about <a class="read-the-docs" href="https://buefy.org/documentation">Buefy docs</a>.</p>
    </div>
  </section>
</template>


<script>
    export default {
        methods: {
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            }
        }
    }
</script>

