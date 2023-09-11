<script setup>
import HomeCategory from "./components/home-category.vue";
import HomeBanner from "./components/home-banner.vue";
import HomeNew from "./components/home-new.vue";
import HomeHot from "./components/home-hot.vue";
import HomeProduct from "./components/home-product.vue";

defineOptions({
  name: 'Home'
})
</script>

<template>
  <div class="container">
    <home-category />
    <home-banner />
  </div>
  <home-new />
  <home-hot />
  <home-product />
</template>

<style scoped lang="scss">

</style>
