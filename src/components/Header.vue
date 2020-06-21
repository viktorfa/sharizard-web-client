<template>
  <div
    class="px-2"
    :style="`height: var(--header-height); ${
      transparent
        ? 'background-color: rgba(0, 0, 0, 1); margin-bottom: calc(-1 * var(--header-height))'
        : 'background-color: var(--sharizard-orange);'
    }`"
  >
    <header class="max-w-content mx-auto h-full">
      <nav class="flex justify-between items-center text-xl h-full text-t1">
        <div>
          <nuxt-link to="/">
            <span class="text-b2 font-bold serif">Sharizard</span>
          </nuxt-link>
        </div>
        <div>
          <nuxt-link to="/premium">Premium</nuxt-link>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  props: { transparent: { type: Boolean, default: false } },
};
</script>

<style></style>
