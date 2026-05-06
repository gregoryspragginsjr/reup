<template>
  <header
    ref="header"
    :class="{'header--active' : drawerActive}"
  >
    <slot
      :toggleDrawer="toggleDrawer"
      :drawerActive="drawerActive"
    />
  </header>
</template>

<script setup lang="ts">
const drawerActive = ref<Boolean>(false);

const toggleDrawer = () => {
  drawerActive.value = !drawerActive.value;

  if (drawerActive.value == true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
    document.body.style.background = '';
  }
}

onMounted(() => {
  console.log('test');
})
</script>