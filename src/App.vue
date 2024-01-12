<template>
  <div class="content_all">
    <router-view v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <KeepAlive :include="includeList">
          <component :is="Component" :key="route.path"></component>
        </KeepAlive>
      </Transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
let includeList = ref([]);

let isMobile = () => document.documentElement.clientWidth - 1 < 700;

// 设置 rem 函数
const setRem = () => {
  const baseSize = 4; //跟postcss.config.js中rootValue的值是一致的
  if (isMobile()) {
    const scale = document.documentElement.clientWidth / 375;
    // let nowSize = baseSize * scale < 3.5 ? 3.5 : baseSize * scale;
    let nowSize = baseSize * scale;
    // 设置页面根节点字体大小 最高为两倍图 即设计稿为750
    document.documentElement.style.fontSize = nowSize + 'px';
  } else {
    let scale = document.documentElement.clientWidth / 1920;
    // const nowH = document.documentElement.clientHeight;
    // if (nowH * 1.77777 < noeW) {
    //   document.body.style.width = nowH * 1.777777 + 'px';
    //   scale = (nowH * 1.777777) / 1920;
    // }
    let nowSize = baseSize * scale;
    // baseSize * scale > 4.5 ? 4.5 : baseSize * scale < 3.5 ? 3.5 : 4;
    // 设置页面根节点字体大小 最高为两倍图 即设计稿为750
    document.documentElement.style.fontSize = nowSize + 'px';
  }
};

// let resizeEvent = () => {
//   if (isMobile()) {
//     if (!route.path.includes('mobile')) {
//       router.push('/mobile');
//     }
//   } else {
//     if (!route.path.includes('pc')) {
//       router.push('/pc');
//     }
//   }
// };

// resizeEvent();
setRem();
window.addEventListener('resize', () => {
  // resizeEvent();
  setRem();
});
</script>

<style scoped lang="less">
.content_all {
  height: 100%;
  width: 100%;
  // overflow-x: hidden;
  // position: relative;
}
</style>
