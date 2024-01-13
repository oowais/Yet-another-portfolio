<template>
  <NuxtLoadingIndicator
    :throttle="0"
    color="repeating-linear-gradient(to right,deepblue 0%,gray 50%,white 100%)"
  />
  <Sidenav>
    <header class="shadow-sm container mx-auto p-4">
      <slot />
    </header>
  </Sidenav>
</template>
