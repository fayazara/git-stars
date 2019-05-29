<template>
  <div class="home">
    <div class="has-text-centered">
      <img src="../assets/logo.png" alt>
      <p class="is-size-2 has-text-weight-bold">Git Stars</p>
      <p class="is-size-5">Find out whats trending in your favourite programming language</p>
    </div>
    <div class="columns has-text-centered">
      <div class="column">
        <router-link to="/javascript">
          <img src="../assets/javascript.svg">
        </router-link>
      </div>
      <div class="column">
        <router-link to="/css">
          <img src="../assets/css.svg">
        </router-link>
      </div>
      <div class="column">
        <router-link to="/ruby">
          <img src="../assets/ruby.svg">
        </router-link>
      </div>
      <div class="column">
        <router-link to="/python">
          <img src="../assets/python.svg">
        </router-link>
      </div>
      <div class="column">
        <router-link to="/java">
          <img src="../assets/java.svg">
        </router-link>
      </div>
      <div class="column">
        <router-link to="/php">
          <img src="../assets/php.svg">
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home img {
  height: 124px;
  margin-bottom: 2rem;
}

.columns {
  margin-top: 2rem;
}

.column {
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.column img {
  height: 75px;
  transition: all 0.5s;
  cursor: pointer;
}

.column img:hover {
  transform: scale(1.1);
}
</style>
