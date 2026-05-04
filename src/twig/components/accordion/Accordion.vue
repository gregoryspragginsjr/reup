<template>
  <div ref="accordion">
    <slot :toggleActive="toggleActive" :active="active" />
  </div>
</template>

<script setup lang="ts">
const active = ref<Number[]>([]);

const props = defineProps({
  single: {
    type: [Boolean, Number],
    required: false,
    default: false,
  },
});

const toggleActive = (b: number, e: Event) => {
  const target = e.target as HTMLElement;
  const panel = target.closest('[data-accordion-panel]') as HTMLElement;
  const panelSiblings = getSiblings(panel) as Element[];
  const window = panel.querySelector('[data-accordion-window]') as HTMLElement;
  const content = panel.querySelector('[data-accordion-content]') as HTMLElement;

  if (active.value.includes(b)) {
    active.value = active.value.filter((item) => item !== b);
  } else {
    active.value.push(b);
  }

  active.value.includes(b)
    ? window.setAttribute(
        'style',
        `height: ${content.offsetHeight}px; visibility: visible;`
      )
    : window.setAttribute('style', 'height: 0; visibility: hidden;');

  if (props.single == true) {
    active.value = active.value.filter((item) => item == b);
    panelSiblings
      .filter((item: Element) => item.localName !== 'code')
      .forEach((sibling) => {
        const siblingWindow = sibling.querySelector('[data-accordion-window]');
        siblingWindow?.setAttribute('style', 'height: 0; visibility: hidden;');
      });
  }
}

const getSiblings = (element: Element) => {
  let siblings = [];
  let sibling = element.parentNode?.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) {
        siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
}
</script>
