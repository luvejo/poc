<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";

import "swiper/css";
</script>

<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :modules="[Autoplay]"
    :autoplay="{
      delay: 4000,
    }"
  >
    <swiper-slide>1</swiper-slide>
    <swiper-slide>2</swiper-slide>
    <swiper-slide>3</swiper-slide>
  </swiper>
</template>
