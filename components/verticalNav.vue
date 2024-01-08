<script setup lang="ts">
const links = [
  {
    label: "Profile",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/6773030?s=400&u=39f22bbd75156d2e5a5be26e4d0118a0e20a7c70&v=4",
    },
  },
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

<template>
  <UVerticalNavigation :links="links" />
</template>
