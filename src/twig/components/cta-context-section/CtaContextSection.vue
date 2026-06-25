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

const animate = () => {
  if (!target.value) return;

  gsap.to(
    target.value,
    {
      scrollTrigger: {
        trigger: target.value,
        toggleActions: 'restart none none reverse',
        // markers: true,
        start: 'top 80%',
        // start: 'top 100%',
        // end: 'top 30%',
        // scrub: 0.75,
      },
      '--before-background': `linear-gradient(
        135deg,
        rgba(27,0,160,0) 90%,
        rgba(27,0,160,1) 100%
      )`,
      duration: 0.8,
      ease: "expo.in",
    },
  )
}

onMounted(() => {
  setTimeout(() => {
    animate();
  }, 600);
})
</script>