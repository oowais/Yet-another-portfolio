<template>
  <div
    class="w-full p-4 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-900 dark:border-gray-700"
  >
    <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
      {{ work.title }}
      <UBadge color="primary" variant="soft">
        {{ work.date }}
      </UBadge>
    </h5>
    <UButton
      label="Link"
      icon="i-mdi-open-in-new"
      color="primary"
      variant="soft"
      trailing
      :to="work.link"
      target="_blank"
      class="mb-3"
    />
    <li
      class="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400"
      v-for="info in work.info"
    >
      {{ info }}
    </li>
    <div class="flex gap-2 pt-4">
      <UBadge
        v-for="skill in work.skills"
        size="md"
        color="primary"
        variant="outline"
      >
        {{ skill }}
      </UBadge>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ work: WorkInfoType }>();
</script>
