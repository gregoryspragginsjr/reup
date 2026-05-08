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

const video = ref<HTMLElement | null>(null);
const active = ref<boolean>(false);
const player = ref<any>(null);

const props = defineProps({
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
  player.value = new YTPlayer(video.value.querySelector('.video__iframe'));

  player.value.load(props.id);
});
</script>

<!-- <script>
import YTPlayer from 'yt-player';

export default {
  data() {
    return {
      active: false,
      player: null,
    };
  },
  mounted() {
    this.player = new YTPlayer(this.$refs.video.querySelector('.video__iframe'));

    this.player.load(this.id);
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    setActive() {
      this.active = true;

      this.player.play();
    },
    toggleActive() {
      this.active = !this.active;

      this.active ? this.player.play() : this.player.pause();
    }
  },
}
</script> -->