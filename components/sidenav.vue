<template>
  <div class="flex flex-wrap w-full">
    <div class="w-1/12 bg-primary-400 dark:bg-primary-950"></div>
    <div
      class="w-2/12 rounded bg-primary-300 dark:bg-primary-900 h-screen sticky top-0"
    >
      <div class="flex flex-col items-center h-screen space-x-4 py-2 mb-5">
        <div class="w-full flex justify-center items-center rounded p-5">
          <UAlert
            :avatar="{
              src: 'https://avatars.githubusercontent.com/u/6773030?v=4',
            }"
            title="Hey there!"
          />
        </div>
        <verticalNav class="pt-6 w-full pl-10" />
        <div class="flex-1"></div>
        <skillsCard />
      </div>
    </div>

    <div class="w-8/12">
      <slot />
    </div>
    <div class="w-1/12 bg-primary-400 dark:bg-primary-950">
      <!-- <div class="fixed right-5 top-5">
        <ThemeSwitch />
        <OldThemeSwitch />
      </div> -->
    </div>
  </div>
</template>
