<script setup>
  const props = defineProps({
    msg: String
  })
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This is a full-fledge Vue 3 + NUI boilerplate to get you developing beautiful and responsive UI's in no time!
    </p>
    <h3>Features</h3>
    <ol>
      <li>TRUE Hot Middle Reload (No need to restart scripts to see your changes)</li>
      <li>Page Routing via <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li>State Management via <a href="https://pinia.vuejs.org" target="_blank" rel="noopener">Pinia</a></li>
      <li>Web Bundled<a href="https://webpack.js.org/" target="_blank" rel="noopener">webpack</a></li>
      <li>ES6 Ready via<a href="https://babeljs.io/" target="_blank" rel="noopener">babel</a></li>
      <li>Expansive, modern http requests via <a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener">axios</a></li>
      <li>Modern CSS Framework via <a href="https://tailwindcss.com/">Tailwind CSS</a></li>
      <li>Auto build releases via GitHub Actions (See Readme)</li>
    </ol>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
</style>
