<template>
  <div class="listItem">
    <a :href="repo.url" target="_blank">
      <div class="listItem__header">
        <h2 class="is-size-5">{{repo.name}}</h2>
      </div>
      <div class="listItem__desc">
        <p>{{ repo.description }}</p>
      </div>
      <div class="dFlex flexAlignCenter flexJustSpace">
        <div v-if="repo.builtBy < 1" class="listItem__author dFlex flexAlignCenter">
          <span class="unknown">Unknown Author</span>
        </div>

        <div v-else class="listItem__author dFlex flexAlignCenter">
          <img :src="repo.builtBy[0].avatar" alt>
          <span class="listItem__author--color authorName">
            <a target="_blank" :href="repo.builtBy[0].href">{{repo.builtBy[0].username}}</a>
          </span>
        </div>

        <div class="has-text-centered">
          <box-icon size="xs" name="star" type="solid" color="#8b8ca9"></box-icon>
          <p class="starCount">{{repo.stars}}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import boxicons from "boxicons";
export default {
  props: {
    repo: Object
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
a {
  color: #5892d0;
}
a:hover {
  color: #5892d0;
}
.listItem {
  display: block;
  padding: 32px;
  background-color: #fff;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.15s ease;
  transition: all 0.2s ease;
  z-index: 1;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.listItem:not(:first-child) {
  border-top: 1px solid #eee;
}
.listItem:first-child {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.listItem:last-child {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.listItem:hover {
  -webkit-transform: scale(1.01);
  transform: scale(1.01);
  -webkit-box-shadow: 0 8px 24px rgba(32, 43, 54, 0.25);
  box-shadow: 0 8px 24px rgba(32, 43, 54, 0.25);
  z-index: 10;
}
.list {
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
}
.listItem__header {
  margin-bottom: 24px;
}
.listItem__header h2 {
  text-transform: capitalize;
}
.listItem__desc {
  margin-bottom: 32px;
  font-size: 18px;
  color: #797979;
}
@media (min-width: 320px) and (max-width: 480px) {
  .listItem__desc {
    font-size: 14px;
  }
}
.dFlex {
  display: flex;
}
.flexAlignCenter {
  align-items: center;
}
.flexJustSpace {
  justify-content: space-between;
}
.listItem__author--color {
  color: #8b8ca9;
}
.listItem__author img {
  height: 32px;
  border-radius: 50%;
  margin-right: 4px;
}
.authorName {
  font-size: 14px;
}
.starCount {
  margin-top: 2px;
  font-size: 14px;
}
.unknown {
  color: #b7b4b4;
}
</style>
