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
const header = ref<HTMLElement | null>(null);
const drawerActive = ref<Boolean>(false);
let breadcrumbs: HTMLElement;

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
  if (window.innerWidth < 639) {
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

onMounted(() => {
  breadcrumbs = header.value.querySelector('.header__breadcrumbs');

  breadcrumbsScrollRight();

  window.addEventListener('resize', () => {
    breadcrumbsScrollRight();
  });
})
</script>