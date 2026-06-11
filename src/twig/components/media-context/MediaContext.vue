<template>
  <div ref="target">
    <slot />
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const target = ref<HTMLElement | null>(null);
let gsapFrom;
let gsapTo; 

const animate = () => {
  if (!target.value) return;

  gsapFrom = target.value.classList.contains('media-context--reversed') ? '160deg' : '-160deg';
  gsapTo = target.value.classList.contains('media-context--reversed') ? '190deg' : '-190deg';

  gsap.fromTo(
    target.value,
    {
      '--after-transform': `rotate(${gsapFrom})`,
    },
    {
      scrollTrigger: {
        trigger: target.value,
        toggleActions: 'restart none none reverse',
        scrub: 0.5,
      },
      '--after-transform': `rotate(${gsapTo})`,
    }
  )
}

onMounted(() => {
  setTimeout(() => {
    animate();
  }, 600);
})
</script>