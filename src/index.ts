import { createApp } from 'vue/dist/vue.esm-bundler';

import Header from './twig/components/header/Header.vue';
import Video from './twig/components/video/Video.vue';
import Accordion from './twig/components/accordion/Accordion.vue';
import Modal from './twig/components/modal/Modal.vue';
import ModalBtn from './twig/components/modal/ModalBtn.vue';
import TestimonialsCarousel from './twig/components/testimonials-carousel/TestimonialsCarousel.vue';
import StoriesCarousel from './twig/components/stories-carousel/StoriesCarousel.vue';
import MediaContext from './twig/components/media-context/MediaContext.vue';
import Context from './twig/components/context/Context.vue';

import './styles/styles.scss';

const app = createApp({
  components: {
    Header,
    Video,
    Accordion,
    Modal,
    ModalBtn,
    TestimonialsCarousel,
    StoriesCarousel,
    MediaContext,
    Context,
  },
});

app.mount('#app');
