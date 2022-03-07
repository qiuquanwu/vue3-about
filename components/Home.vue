<template>
  <div class="center">
    <img src="../imgs/logo.png" alt="" style="width: 300px; height: 300px" />
    <h1>Vue3-About</h1>
    <h2 class="mt-10">Some awesome project for vue3</h2>
    <div class="mt-10">
      <NSpace justify="center">
        <NButton type="primary" tag="a" href="/home/index" size="large">
          Browse Now
        </NButton>
        <NButton
          type="warning"
          tag="a"
          href="https://github.com/qiuquanwu/vue3-about"
          target="_blank"
          quaternary
          size="large"
        >
          Repository
        </NButton>
      </NSpace>
    </div>
  </div>
  <div class="mt-10">
    <NSpace justify="center">
      <span>copyright@qiuquanwu</span>
      <a href="https://github.com/qiuquanwu">About Author</a>
    </NSpace>
  </div>
</template>

<script setup>
import { NButton, NSpace } from "naive-ui";
</script>

<style scoped>
.center {
  margin-top: 2rem;
  text-align: center;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
}
.center h1 {
}
.mt-10 {
  margin-top: 2rem;
}
/*去除a标签下划线*/
a {
  text-decoration: none;
}
/*去除未被访问的a标签的下划线*/
a:link {
  text-decoration: none;
}
/*去除已经被访问过的a标签的下划线*/
a:visited {
  text-decoration: none;
}
/*去除鼠标悬停时的a标签的下划线*/
a:hover {
  text-decoration: none;
}
/*去除正在点击的a标签的下划线（鼠标按下，尚未松开）*/
a:active {
  text-decoration: none;
}
/*去除获得焦点的a标签的下划线（被鼠标点击过）*/
a:focus {
  text-decoration: none;
}
</style>
