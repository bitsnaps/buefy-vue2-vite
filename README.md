# Vite & Vue2 & Buefy

A simple starter template using Vite & Vue v2 and Bulam plugin for v2 (aka. Buefy).

# How this app was created?

You can reproduce this repo using the following steps:

1- Init the app:
```
npm init vite@latest buefy-demo -- --template vanilla
# or
pnpm create vite
# then enter the project name (e.g. "buefy-demo") and then choose "vanilla" twice (no typescript required). 
```

2- Install dependencies:
```
npm i -D vite-plugin-vue2 vue-template-compiler@2.7.8
npm i vue@2.7.8 --save
```


3- Configure Vite to use Vue 2:
```js
//vite.config.js
const path = require('path')
const { createVuePlugin } = require('vite-plugin-vue2')

module.exports = {
  plugins: [
    createVuePlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    }
  }
}
```
4- Create the source & setup files:
```
mkdir src
mv main.js src/main.js
```
Here is the content of `main.js`:
```js
import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// Use Buefy
Vue.use(Buefy)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
```
Create the app component `src/App.vue`:
```html
<template>
  <section class="section">
    <div class="container">
      <img class="logo" src="/vite.svg">
      <h1 class="title">Vite & Vue2 & Buefy</h1>      
      <b-button type="is-success">Button</b-button>
    </div>
  </section>
</template>
```

You can delete unused files (`counter.js`, `style.css`...).

Find out more about [buefy](https://buefy.org/) for more examples.

