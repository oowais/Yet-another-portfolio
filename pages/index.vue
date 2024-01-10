<template>
  <UContainer>
    <UButton
      id="edu"
      :icon="isDark ? `i-heroicons-sun` : `i-heroicons-moon`"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
    <Projects />
    <Work id="work" class="mt-6" />
  </UContainer>
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
