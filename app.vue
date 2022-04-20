<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

const activeIndex = ref(null);
const articles = [
  {
    card: "https://images.unsplash.com/photo-1570979872219-9fadc2383792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80",
  },
  {
    card: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    card: "https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
  },
  {
    card: "https://images.unsplash.com/photo-1506158669146-619067262a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

onMounted(() => {
  activeIndex.value = 0;
});

const onautoplayPause = () => {
  activeIndex.value = 5;
};

const onautoplayResume = (s) => {
  activeIndex.value = s.activeIndex;
};

const onactiveIndexChange = (s) => {
  activeIndex.value = s.activeIndex;
};
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <swiper
      effect="fade"
      :spaceBetween="30"
      :centeredSlides="true"
      :modules="[Autoplay, EffectFade]"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      @autoplayResume="onautoplayResume"
      @autoplayPause="onautoplayPause"
      @activeIndexChange="onactiveIndexChange"
    >
      <swiper-slide
        v-for="(article, index) in articles"
        :key="index"
        class="max-h-96"
      >
        <div class="relative w-full pb-1/2">
          <img
            :src="article.card"
            alt=""
            class="absolute top-0 left-0 h-full w-full object-cover object-left-top"
          />
        </div>
      </swiper-slide>
    </swiper>

    <div class="grid grid-cols-4 gap-x-3">
      <div
        v-for="(article, index) in articles"
        :key="index"
        class="mb-1 h-2 bg-s-300"
      >
        <div
          class="h-2 origin-left bg-p-500"
          :class="
            index === activeIndex
              ? `scale-x-100 transition-transform duration-[4000ms]`
              : 'scale-x-0'
          "
        ></div>
      </div>
    </div>
  </div>
</template>
