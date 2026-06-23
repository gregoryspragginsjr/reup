<template>
  <header
    ref="header"
    :class="{'header--active' : drawerActive}"
  >
    <slot
      :toggleDrawer="toggleDrawer"
      :drawerActive="drawerActive"
      :keyboardLeft="keyboardLeft"
      :keyboardRight="keyboardRight"
    />
  </header>
</template>

<script setup lang="ts">
import gsap from 'gsap';

const header = ref<HTMLElement | null>(null);
const drawerActive = ref<Boolean>(false);
let breadcrumbs: HTMLElement;
let headerMain: HTMLElement;

const toggleDrawer = () => {
  drawerActive.value = !drawerActive.value;

  if (drawerActive.value == true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
    document.body.style.background = '';
  }
}

const breadcrumbsScrollRight = () => {
  if (window.innerWidth < 639 && breadcrumbs) {
    breadcrumbs.scrollLeft = breadcrumbs.scrollWidth - breadcrumbs.clientWidth;
  }
}

const keyboardRight = (e) => {
  if (e.srcElement.parentNode.nextSibling) {
    e.srcElement.parentNode.nextSibling.getElementsByTagName('a')[0].focus();
  }
}

const keyboardLeft = (e) => {
  if (e.srcElement.parentNode.previousSibling) {
    e.srcElement.parentNode.previousSibling.getElementsByTagName('a')[0].focus();
  }
}

const animate = () => {
  headerMain = header.value.querySelector('.header__main');

  if (breadcrumbs) {
    gsap.to(
      breadcrumbs,
      {
        y: '-300%',
        duration: 0,
      },
    )
  }

  gsap.fromTo(
    headerMain,
    {
      y: '-20%',
      opacity: 0,
    },
    {
      y: '0%',
      opacity: 1,
      duration: 0.5,
      ease: "expo.inOut",
      onComplete: () => {
        if (breadcrumbs) {
          gsap.to(
            breadcrumbs,
            {
              y: '0%',
              duration: 0.25,
              ease: "expo.inOut",
            }
          );
        }
      }
    }
  )
}

onMounted(() => {
  breadcrumbs = header.value.querySelector('.header__breadcrumbs');

  breadcrumbsScrollRight();

  window.addEventListener('resize', () => {
    breadcrumbsScrollRight();
  });

  setTimeout(() => {
    animate();
  }, 50);
})
</script>