<template>
  <div @click="toggleActive()" ref="video">
    <slot
      :active="active"
      :setActive="setActive"
    />
  </div>
</template>

<script>
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
</script>