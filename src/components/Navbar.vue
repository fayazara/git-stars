<template>
  <div id="nav">
    <div class="is-flex is-justify-align-center">
      <p class="is-size-4">
        Trending today in
        <span class="is-capital">{{ $route.params.language }}</span>
      </p>
      <b-dropdown position="is-bottom-left" aria-role="list">
        <button class="button is-info" slot="trigger">
          <span>
            <box-icon name="filter" color="#ffffff"></box-icon>
          </span>
          <!-- <b-icon icon="menu-down"></b-icon> -->
        </button>
        <b-dropdown-item v-for="(language, index) in languages" :key="index" aria-role="listitem">
          <router-link tag="li" :to="language.uri">{{language.name}}</router-link>
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: "javascript",
      languages: [
        {
          name: "Javascript",
          uri: "/javascript"
        },
        {
          name: "CSS",
          uri: "/css"
        },
        {
          name: "Ruby",
          uri: "/ruby"
        },
        {
          name: "Python",
          uri: "/python"
        },
        {
          name: "Java",
          uri: "/java"
        },
        {
          name: "PHP",
          uri: "/php"
        }
      ]
    };
  },
  watch: {
    $route(to) {
      this.selectedLanguage = to.params.language;
    }
  }
};
</script>

<style scoped>
.button {
  background-color: #5892d0;
}
#nav {
  padding: 1.3rem;
}

li {
  list-style: none;
}
.is-capital {
  text-transform: capitalize;
}

.is-justify-align-center {
  justify-content: space-between;
  align-items: center;
}
</style>
