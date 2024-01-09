<template>
  <UVerticalNavigation :links="links">
    <template #icon="{ link }">
      <UIcon :name="link.icon" />
    </template>
  </UVerticalNavigation>
</template>

<script setup lang="ts">
const links = [
  {
    label: "Installation",
    icon: "i-heroicons-home",
    to: "#edu",
  },
  {
    label: "Vertical Navigation",
    icon: "i-heroicons-chart-bar",
    to: "#work",
  },
  {
    label: "Command Palette",
    icon: "i-heroicons-command-line",
    to: "#skill",
  },
];
</script>
