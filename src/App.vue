<template>
  <TheHeader>Remeber Me</TheHeader>
  <TheTabs></TheTabs>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheTabs from './components/TheTabs.vue';
export default {
  components: {
    TheHeader,
    TheTabs,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
