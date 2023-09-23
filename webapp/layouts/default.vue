<template>
  <div>
    <slot />

    <div class="bg-bluegray-900 text-gray-100 p-2 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
      <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">CREATED BY PANTAKIT, KITSADA AND SUPAKORN</span>
      </div>
    </div>
  </div>
</template>

<style>
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
