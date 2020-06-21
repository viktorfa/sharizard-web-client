<template>
  <div>
    <div style="min-height: calc(100vh - var(--header-height));">
      <Header />
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
