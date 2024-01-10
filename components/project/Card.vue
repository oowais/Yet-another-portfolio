<template>
  <div
    class="flex relative items-center bg-slate-100 dark:bg-gray-900 justify-center mt-5 border-l-4 border-indigo-500 shadow-xl rounded-xl"
  >
    <div
      class="overflow-hidden relative text-center p-2 group items-center flex flex-col max-w-sm"
    >
      <UIcon
        :name="project.icon"
        class="dark:text-primary-200 text-primary-900 mt-2"
        width="64"
        height="64"
      />
      <div>
        <h1 class="font-semibold text-primary-700 dark:text-primary-200 mb-4">
          {{ project.title }}
        </h1>

        <div class="flex justify-between mt-2">
          <UBadge color="primary" variant="soft">
            Team Size: {{ project.teamSize }}
          </UBadge>
          <UBadge v-if="project.date" color="primary" variant="soft">
            {{ project.date }}
          </UBadge>
        </div>
        <p class="text-gray-500 text-justify text-sm my-4">
          {{ project.desc }}
        </p>
        <div class="flex justify-between">
          <div class="flex gap-2">
            <UBadge
              v-for="lang in project.languages"
              color="primary"
              variant="outline"
            >
              {{ lang }}
            </UBadge>
          </div>
          <UButton
            v-if="project.link"
            icon="i-mdi-github"
            color="primary"
            variant="soft"
            trailing
            :to="project.link"
            target="_blank"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ project: ProjectInfoType }>();
</script>
