<template>
  <div>
    <Header transparent />
    <nuxt />
    <Footer transparent />
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
