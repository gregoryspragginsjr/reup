<template>
  <button
    ref="btn"
    class="modal-btn"
    @click="toggleActive()"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const btn = ref<HTMLElement | null>(null);
const active = ref<Boolean>(false);

const toggleActive = () => {
  const button = btn.value as HTMLElement;
  const modal = button.nextSibling as HTMLElement;
  const video = modal.querySelector('.video') as HTMLElement;
  const documentHtmlTag = document.getElementsByTagName('html')[0] as HTMLElement;
  active.value = !active.value;

  if (active.value) {
    modal.classList.add('modal--active');
    document.body.style.overflow = 'hidden';
    documentHtmlTag.style.overflow = 'hidden';
  } else {
    modal.classList.remove('modal--active');
    document.body.style.overflow = '';
    documentHtmlTag.style.overflow = '';
  }  

  // If theres a Video in the slot of
  // this components sibling IE the modal itself
  // click it. That will toggle the pause and play.
  if (video) {
    video.click();
  }
}

onMounted(() => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && active.value) {
      toggleActive();
    }
  });
})
</script>