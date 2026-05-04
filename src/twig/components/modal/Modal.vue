<template >
  <div
    class="modal"
    ref="modal"
  >
    <div
      class="modal__close-area"
      @click="closeModal()"
    />
    <button
      class="modal__button"
      @click="closeModal()"
    >
      <span class="sr-only" v-text="'Close modal'" />
      <svg class="icon-x" viewBox="0 0 51.9 51.1">
        <path d="m2.4 1.7 48.1 48M1.4 49.4l48-48" />
      </svg>
    </button>
    <div class="modal__main">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// The trick with this simple modal
// is that it is completely controlled by
// the active state of it's sibling button
// IE the modal.previousSibling

const modal = ref<HTMLElement | null>(null);

const closeModal = () => {
  if (modal.value?.previousSibling instanceof HTMLElement) {
    modal.value.previousSibling.click();
  }
};

defineExpose({
  closeModal,
});
</script>