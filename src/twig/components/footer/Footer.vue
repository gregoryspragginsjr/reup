<template>
  <footer ref="footer">
    <slot />
  </footer>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const footer = ref<HTMLElement | null>(null);
let bricks: HTMLElement[];

const animate = () => {
  bricks = footer.value.querySelectorAll('.footer__brick');

  console.log(bricks);

  gsap.fromTo(
    bricks[0],
    {
      rotation: '-=30',
    },
    {
      scrollTrigger: {
        trigger: footer.value,
        toggleActions: 'restart none none reverse',
        scrub: 0.5,
        end: 'top 40%',
      },
      rotation: '0'
    }
  )

  gsap.fromTo(
    bricks[1],
    {
      rotation: '+=30',
    },
    {
      scrollTrigger: {
        trigger: footer.value,
        toggleActions: 'restart none none reverse',
        scrub: 0.5,
        end: 'top 40%',
      },
      rotation: '0'
    }
  )
}

onMounted(() => {
  setTimeout(() => {
    animate();
  }, 100);
})
</script>