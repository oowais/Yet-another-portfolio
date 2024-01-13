<template>
  <UAlert
    class="shadow-2xl mt-4"
    icon="i-mdi-account-school-outline"
    title="Education"
  />
  <div class="grid grid-cols-3 gap-4">
    <!-- <template v-for="proj in projects">
      <ProjectsCard :project="proj" />
    </template> -->
  </div>
</template>

<script setup lang="ts">
useHead({ title: "~Education" });
</script>
