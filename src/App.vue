<template>
  <section id="app" class="section container">
    <router-view/>
    <Footer/>
  </section>
</template>
<script>
import Footer from "./components/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Product Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  background-color: #f2f9ff !important;
}
</style>
