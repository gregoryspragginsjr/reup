<template>
  <div
    ref="target"
    class="context--animated"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';

const target = ref<HTMLElement | null>(null);
let subheading: HTMLElement;
let heading: HTMLElement;
let paragraphs: HTMLElement[];
let tags: HTMLElement[];
let buttons: HTMLElement[];

const animate = () => {
  subheading = target.value.querySelector('.context__subheading');
  tags = target.value.querySelectorAll('.tag');
  heading = target.value.querySelector('.context__heading');
  paragraphs = target.value.querySelectorAll('p');
  buttons = target.value.querySelectorAll('.default-btn');

  // Subheading
  if (subheading) {
    gsap.fromTo(
      subheading,
      {
        // opacity: 0,
        y: '5px',
      },
      {
        opacity: 1,
        y: '0px',
        duration: 0.8,
        delay: 0.4,
      }
    );
  }

  // Tags
  if (tags) {
    gsap.fromTo(
      tags,
      {
        // opacity: 0,
        x: '-10px',
      },
      {
        opacity: 1,
        x: '0px',
        duration: 0.8,
        stagger: 0.1,
      }
    )
  }

  // Heading
  if (heading) {
    gsap.to(
      heading,
      {
        opacity: 1,
        duration: 1,
      }
    );
  }

  // Paragraphs
  if (paragraphs) {
    gsap.fromTo(
      paragraphs,
      {
        // opacity: 0,
        y: '5px',
      },
      {
        opacity: 1,
        y: '0px',
        duration: 0.8,
        stagger: 0.1,
      }
    )
  }

  // Buttons
  if (buttons) {
    gsap.fromTo(
      buttons,
      {
        // opacity: 0,
        x: '-10px',
      },
      {
        opacity: 1,
        x: '0px',
        duration: 0.8,
        stagger: 0.1,
      }
    )
  }
}

onMounted(() => {
  setTimeout(() => {
    animate();
  }, 25);
});
</script>