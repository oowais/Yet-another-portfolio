<template>
  <div class="flex flex-wrap w-full h-screen">
    <div class="w-1/12 h-0"></div>
    <div class="w-3/12 rounded h-full shadow-xl">
      <div class="flex flex-col items-center h-screen space-x-4 p-2 mb-5">
        <div class="w-full flex justify-center items-center rounded p-5">
          <UPopover mode="hover">
            <UAvatar
              src="https://avatars.githubusercontent.com/u/6773030?s=400&u=39f22bbd75156d2e5a5be26e4d0118a0e20a7c70&v=4"
              alt="Avatar"
              size="xl"
            />
            <template #panel>
              <div class="p-4">
                <span>Hi! I am Owais!</span>
              </div>
            </template>
          </UPopover>
          <!-- <UButton
            icon="i-mdi-github"
            variant="ghost"
            to="https://github.com/oowais"
          /> -->
        </div>
        <verticalNav class="pt-6" />
        <div class="flex-1"></div>
        <UButton>asdf</UButton>
      </div>
    </div>

    <div class="w-7/12">
      <slot />
    </div>
    <div class="w-1/12"></div>
  </div>
</template>
