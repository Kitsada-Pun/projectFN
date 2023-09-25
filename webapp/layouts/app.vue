<template>
  <div>
    <Menubar
      :model="items"
      class="p-menubar-start surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static"
      :pt="{
        menuitem: ({ props, state, context }) => ({
          class: [useRoute().path === context.item.item.to ? 'p-focus' : '', 'ok'],
        }),
      }"
    >
      <template #start>
        <div class="text-2xl font-bold line-height-1">
          Smart Thermometer
        </div>
      </template>
      <!-- <template #end>
        After
      </template> -->
    </Menubar>
    <div class="px-4 py-6 md:px-6 lg:px-8">
      <slot />
    </div>
    <div class="bg-bluegray-900 text-gray-100 p-2 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
      <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">CREATED BY PANTAKIT, KITSADA AND SUPAKORN</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-home',
          to: '/app',
        },
      ],
    }
  },
}
</script>

<style>
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--surface-ground);
}
</style>
