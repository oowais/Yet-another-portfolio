<template>
  <UCard>
    <template #header>
      <span>{{ work.title }} </span>
      <span>{{ work.link }} </span>
      <span>{{ work.date }} </span>
    </template>

    {{ work.info }}

    <template #footer>
      {{ work.skills }}
    </template>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{ work: WorkInfoType }>();
</script>
