<template>
  <div class="w-full h-full pt-40px bg-[#f3f3f3] overflow-auto">
    <div class="px-394px mb-96px">
      <div class="flex items-center justify-between mb-26px">
        <div
          class="flex-1 h-164px bg-[#ffffff] mr-17px flex flex-col justify-center pl-40px"
        >
          <div
            class="text-26px text-[#000000] leading-34px font-600 flex items-center mb-12px"
          >
            <div class="w-28px h-28px mr-12px">
              <img class="w-28px h-28px" src="/images/email.svg" alt="" />
            </div>
            <div class="opacity-95">Email Address</div>
          </div>
          <div
            class="text-20px text-[#000000] opacity-45 leading-28px font-300"
          >
            bronislav.nesvetaylo@inbox.ru
          </div>
        </div>
        <div
          class="flex-1 h-164px bg-[#ffffff] flex flex-col justify-center pl-40px"
        >
          <div
            class="text-26px text-[#000000] leading-34px font-600 flex items-center mb-12px"
          >
            <div class="w-28px h-28px mr-12px">
              <img class="w-28px h-28px" src="/images/address.svg" alt="" />
            </div>
            <div class="opacity-95">Office Address</div>
          </div>
          <div
            class="text-20px text-[#000000] opacity-45 leading-28px font-300"
          >
            23 E Broadway, New York, NY 10002
          </div>
        </div>
      </div>
      <div id="allmap" class="w-fullpx h-538px overflow-hidden"></div>
    </div>
    <!-- 底部 -->
    <div
      class="w-full h-120px bg-[#14182C] flex flex-col items-center justify-center"
    >
      <div class="w-188px h-34px mb-10px">
        <img class="w-188px h-34px" src="/images/logo.png" alt="" />
      </div>
      <div class="text-16px text-[#FFFFFF] opacity-55 font-400">
        Reimagining the power of investing. Connecting people for a better
        world.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const BMapGL = window.BMapGL;
  var map = new BMapGL.Map('allmap');
  map.centerAndZoom(new BMapGL.Point(-73.9971, 40.71335), 16);
  map.enableScrollWheelZoom(true);

  var marker1 = new BMapGL.Marker(new BMapGL.Point(-73.9971, 40.71335));
  map.addOverlay(marker1);
});
// 北40.71625°, 西73.99616°  120.08177, 30.29975
</script>

<style scoped lang="less"></style>
