<template>
  <UButton
    id="edu"
    :icon="isDark ? `i-heroicons-sun` : `i-heroicons-moon`"
    color="gray"
    variant="ghost"
    aria-label="Theme"
    @click="isDark = !isDark"
  />
</template>

<script setup lang="ts">
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
