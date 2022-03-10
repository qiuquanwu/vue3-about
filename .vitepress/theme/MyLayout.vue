<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import defaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { computed } from "vue";
const { Layout } = defaultTheme;
const { page, frontmatter } = useData();
console.log(page.value.headers);
let list = computed(() => {
  let res = [...page.value.headers];
  console.log(res);
  return res.filter((item) => {
    return item.level == 2;
  });
});

let isShow = computed(() => {
  return frontmatter.aside !== false && list.value.length > 0;
});
</script>

<template>
  <Layout></Layout>
  <div class="aside" v-if="isShow">
    <div>Menu:</div>
    <div class="aside-container">
      <ul>
        <li v-for="item of list" :key="item.title">
          <a :href="'#' + item.title.replace(/\s+/g, '-').toLowerCase()">{{
            item.title
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.aside {
  position: fixed;
  width: 260px;
  background: rgba(238, 238, 238, 0.3);
  top: 100px;
  right: 20px;
  padding: 1rem;
  border-radius: 1rem;
  max-height: 800px;
  overflow: auto;
}
</style>
