<template>
  <footer class="bg-b2 text-t1 py-4">
    <div class="container">
      <div class="flex flex-col items-center">
        <p>Made with 🥰</p>
        <p>© {{ year }} sharizard.com</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return { year: new Date().getUTCFullYear() };
  },
};
</script>

<style></style>
