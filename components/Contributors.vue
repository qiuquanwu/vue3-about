<template>
  <div class="box">
    <NSpace justify="center">
      <a :href="item.html_url" target="_blank" v-for="item of list" :key="item.login">
        <NAvatar round :size="48" :src="item.avatar_url"></NAvatar>
      </a>
    </NSpace>
  </div>
</template>

<script setup>
import { NAvatar, NSpace } from "naive-ui";
import { onMounted, ref } from "vue";

const list = ref([]);
onMounted(async () => {
  let response = await fetch(
    "https://api.github.com/repos/qiuquanwu/vue3-about/contributors"
  );

  let data = await response.json();
  console.log(data);
  list.value = data;
});
</script>

<style>
.box {
  margin-top: 1rem;
}
</style>
