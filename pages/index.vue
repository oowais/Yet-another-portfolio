<template>
  <UContainer>
    <flag-for-india style="font-size: 2rem" />
    <UButton
      id="edu"
      :icon="isDark ? `i-heroicons-moon` : `i-heroicons-sun`"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
    <ThemeSwitcher id="work" />
    <UButton id="skill">Test </UButton>
    <UAvatar
      src="https://avatars.githubusercontent.com/u/6773030?s=400&u=39f22bbd75156d2e5a5be26e4d0118a0e20a7c70&v=4"
      alt="Avatar"
      size="xl"
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
