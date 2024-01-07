<template>
  <UContainer>
    <flag-for-india style="font-size: 2rem" />
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
  </UContainer>
</template>

<script setup lang="ts">
import FlagForIndia from "~icons/emojione/flag-for-india";

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
