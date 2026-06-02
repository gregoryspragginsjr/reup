<template>
  <div
    ref="carousel"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <slot
      :activeSlide="activeSlide"
      :toggleActive="toggleActive"
    />
  </div>
</template>

<script setup lang="ts">
const carousel = ref<HTMLElement | null>(null);
const activeSlide = ref<Number>(1);
const hovered = ref<Boolean>(false);
let carouselWindow: HTMLElement;
let slides: HTMLElement[];

const toggleActive = (i: number) => {
  activeSlide.value = i;

  setTimeout(() => {
    carouselWindow.style.height = carousel.value.querySelector('.testimonials-carousel__slide--active').offsetHeight + 'px';
  }, 100);
};

onMounted(() => {
  carouselWindow = carousel.value.querySelector('.testimonials-carousel__window');
  carouselWindow.style.height = carousel.value.querySelector('.testimonials-carousel__slide--active').offsetHeight + 'px';
  slides = carousel.value.querySelectorAll('.testimonials-carousel__slide');

  window.addEventListener('resize', () => {
    toggleActive(1);
  });

  setInterval(() => {
    if (hovered.value == false && window.innerWidth > 639) {
      activeSlide.value == slides.length ? toggleActive(1) : toggleActive(activeSlide.value += 1);
    }
  }, 4000);
});
</script>