<template>
  <div>    
    <Navbar/>
    <b-loading :is-full-page="isFullPage" :active.sync="loading"></b-loading>
    <transition name="fade" mode="out-in">
      <div v-if="!loading">
        <Card v-for="(repo, index) in repos" :key="index" :repo="repo"/>
      </div>
    </transition>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";

import axios from "axios";
export default {
  components: {
    Navbar,
    Card
  },
  data() {
    return {
      loading: false,
      since: "daily",
      language: "javascript",
      repos: [],
      isLoading: false,
      isFullPage: true
    };
  },
  methods: {
    getData() {
      const params = [`language=${this.language}`, `since=${this.since}`].join(
        "&"
      );
      this.loading = true;
      this.repos = [];
      axios
        .get(`https://github-trending-api.now.sh/repositories?${params}`)
        .then(response => {
          this.repos = response.data;
          this.loading = false;
        })
        .catch(error => {
          this.loading = true;
        });
    }
  },
  created() {
    this.getData();
  },
  watch: {
    $route(to) {
      this.language = to.params.language;
      this.getData();
    }
  }
};
</script>

<style>
</style>
