<template>
  <UVerticalNavigation
    :links="links"
    :ui="{
      base: 'group block border-s -ms-px lg:leading-8 before:hidden',
      padding: 'p-0 ps-4',
      rounded: '',
      ring: '',
      active:
        'text-primary-700 dark:text-primary-400 border-current font-semibold',
      inactive:
        'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
    }"
  />
</template>

<script setup lang="ts">
const links = [
  {
    label: " Github",
    to: "https://github.com/oowais",
    target: "_blank",
    icon: "i-mdi-open-in-new",
  },
  {
    label: "Projects",
    to: "#projects",
  },
  {
    label: "Work Experience",
    to: "#work",
  },
  {
    label: "Education",
    to: "#13",
  },
];
</script>
