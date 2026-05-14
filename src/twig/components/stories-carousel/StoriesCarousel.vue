<template>
  <div ref="carousel">
    <slot
      :activeSlide="activeSlide"
      :toggleActive="toggleActive"
    />
  </div>
</template>

<script setup lang="ts">
const carousel = ref<HTMLElement | null>(null);
const activeSlide = ref<Number>(1);
// let carouselWindow: HTMLElement;

const toggleActive = (i: number) => {
  activeSlide.value = i;

  // setTimeout(() => {
  //   carouselWindow.style.height = carousel.value.querySelector('.testimonials-carousel__slide--active').offsetHeight + 'px';
  // }, 50);
};

// onMounted(() => {
//   // carouselWindow = carousel.value.querySelector('.testimonials-carousel__window');
//   // carouselWindow.style.height = carousel.value.querySelector('.testimonials-carousel__slide--active').offsetHeight + 'px';

//   window.addEventListener('resize', () => {
//     toggleActive(1);
//   });
// });
</script>