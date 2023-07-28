<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const devmode = ref(false);
const visible = ref(false);

onMounted(() => {
  window.addEventListener("message", onMessage);
});

onUnmounted(() => {
  window.removeEventListener("message", onMessage);
});

const onMessage = (event) => {
  switch (event.data.type) {
    case "toggle":
      visible.value = event.data.visible;
      api.post("updatestate", {
        state: this.visible
      }).catch(e => {
        console.log(e.message)
      });
      break;
    default:
      break;
  }
}

const closeApp = () => {
  visible.value = false
  api.post("updatestate", {
    state: visible.value
  }).catch(e => {
    console.log(e.message)
  });
}
</script>

<template>
  <div id="content" v-if="visible || devmode">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>

      <div id="close" @click="closeApp">Close</div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

h3 {
  margin: 40px 0 0;
}

ol {
  text-align: left;
}

a {
  color: #42b983;
}

a:hover {
  color: #fff;
  cursor: pointer;
}

#content {
  background-color: rgb(32, 32, 32);
  border-radius: 6px;
  max-width: 500px;
  max-height: 800px;
  padding: 10px;

  position: absolute;
  top: 20%;
  left: 50%;

  transform: translate(-50%, -20%);
}

#close {
  position: absolute;
  right: 0;
  top: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  a:hover {
    color: #42b983;
    cursor: pointer;
  }
}
</style>
