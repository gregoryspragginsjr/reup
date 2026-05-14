<template>
  <div @click="toggleActive()" ref="video">
    <slot
      :active="active"
      :setActive="setActive"
    />
  </div>
</template>

<script setup lang="ts">
import YTPlayer from 'yt-player';
import '@wistia/wistia-player';

const video = ref<HTMLElement | null>(null);
const active = ref<boolean>(false);
const player = ref<any>(null);

const props = defineProps({
  player: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: true,
  },
});

const setActive = () => {
  active.value = true;

  player.value.play();
}

const toggleActive = () => {
  active.value = !active.value;

  active.value ? player.value.play() : player.value.pause();
}

onMounted(() => {
  if (props.player == 'wistia') {
    player.value = video.value.querySelector('.video__iframe');
  } else {
    player.value = new YTPlayer(video.value.querySelector('.video__iframe'));

    player.value.load(props.id);
  }
});
</script>