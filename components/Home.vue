<template>
  <div class="center">
    <img src="../imgs/logo.png" alt="" style="width: 300px; height: 300px" />
    <h1>Vue3-About</h1>
    <IndexVue />
    <div class="mt-10">
      <NSpace justify="center">
        <NButton type="primary" tag="a" href="/home/index" size="large">
          Visit Now
        </NButton>
        <NButton
          type="warning"
          tag="a"
          href="https://github.com/qiuquanwu/vue3-about"
          target="_blank"
          quaternary
          size="large"
        >
          Iusse or PR
        </NButton>
      </NSpace>
    </div>
  </div>
  <div class="mt-10">
    <h3>Contributors:</h3>
    <Contributors></Contributors>
  </div>
  <div class="mt-10">
    <NSpace justify="center">
      <span>copyright@qiuquanwu</span>
      <a href="https://github.com/qiuquanwu">About Author</a>
    </NSpace>
  </div>
  <NModal
    v-model:show="showModal"
    class="custom-card"
    preset="card"
    title="Search"
    size="huge"
    :bordered="false"
    style="width: 600px; height: 600px"
  >
    <NInput size="large" placeholder="Search..." @input="onSearch">
      <template #suffix>
        <n-icon
          ><svg
            t="1646710470713"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2077"
            width="200"
            height="200"
          >
            <path
              d="M953.504 908.256l-152.608-163.296c61.856-74.496 95.872-167.36 95.872-265.12 0-229.344-186.624-415.968-416.032-415.968-229.344 0-415.968 186.592-415.968 415.968s186.624 415.968 416 415.968c60.096-0.032 118.048-12.576 172.224-37.248 16.096-7.328 23.2-26.304 15.872-42.368-7.328-16.128-26.4-23.264-42.368-15.872-45.856 20.864-94.88 31.456-145.76 31.488-194.08 0-351.968-157.888-351.968-351.968 0-194.048 157.888-351.968 351.968-351.968 194.112 0 352.032 157.888 352.032 351.968 0 91.36-34.848 177.92-98.08 243.744-12.256 12.736-11.84 32.992 0.864 45.248 0.96 0.928 2.208 1.28 3.296 2.08 0.864 1.28 1.312 2.752 2.4 3.904l165.504 177.088c6.272 6.752 14.816 10.144 23.36 10.144 7.84 0 15.68-2.848 21.856-8.64C964.864 941.408 965.568 921.152 953.504 908.256z"
              p-id="2078"
            ></path></svg
        ></n-icon>
      </template>
    </NInput>
    <n-divider> Search Result </n-divider>
    <n-scrollbar style="max-height: 380px"> </n-scrollbar>
  </NModal>
</template>

<script setup>
import {
  NButton,
  NSpace,
  NModal,
  NInput,
  NCard,
  NIcon,
  NScrollbar,
  NDivider,
} from "naive-ui";
import IndexVue from "./Index.vue";
import Contributors from "./Contributors.vue";
import { ref } from "vue";
const showModal = ref(false);

const onSearch = (text) => {
  console.log(text);
};
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
