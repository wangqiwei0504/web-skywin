<template>
  <div class="w-full h-full relative">
    <!-- 头部 -->
    <div
      class="w-full h-96px bg-[#14182C ] px-350px bg-[#14182C] flex items-center justify-between"
    >
      <div class="w-314px h-56px">
        <img class="w-314px h-56px" src="/images/logo.png" alt="" />
      </div>
      <div class="flex items-center">
        <div class="relative mr-56px">
          <div
            class="text-18px leading-26px font-500 cursor-pointer"
            :class="route.name == 'goal' ? 'text-[#3AA3FF]' : 'text-[#ffffff]'"
            @click="router.push('/goal')"
          >
            Your Life Goals
          </div>
          <div
            v-if="route.name == 'goal'"
            class="absolute left-[50%] trans top-54px w-[60%] h-5px bg-[#3AA3FF]"
          ></div>
        </div>
        <div class="relative mr-56px">
          <div
            class="text-18px leading-26px font-500 cursor-pointer"
            :class="route.name == 'tech' ? 'text-[#3AA3FF]' : 'text-[#ffffff]'"
            @click="router.push('/tech')"
          >
            Tech Insights
          </div>
          <div
            v-if="route.name == 'tech'"
            class="absolute left-[50%] trans top-54px w-[60%] h-5px bg-[#3AA3FF]"
          ></div>
        </div>
        <div class="relative mr-56px">
          <div
            class="text-18px leading-26px font-500 cursor-pointer"
            :class="
              route.name == 'crypto' ? 'text-[#3AA3FF]' : 'text-[#ffffff]'
            "
            @click="router.push('/crypto')"
          >
            Crypto Trends
          </div>
          <div
            v-if="route.name == 'crypto'"
            class="absolute left-[50%] trans top-54px w-[60%] h-5px bg-[#3AA3FF]"
          ></div>
        </div>
        <div class="relative">
          <div
            class="text-18px leading-26px font-500 cursor-pointer"
            :class="
              route.name == 'teacher' ? 'text-[#3AA3FF]' : 'text-[#ffffff]'
            "
            @click="router.push('/teacher')"
          >
            Teacher Introduction
          </div>
          <div
            v-if="route.name == 'teacher'"
            class="absolute left-[50%] trans top-54px w-[60%] h-5px bg-[#3AA3FF]"
          ></div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="minh relative">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
.trans {
  transform: translateX(-50%);
}
.minh {
  height: calc(100vh - 96px);
}
</style>
