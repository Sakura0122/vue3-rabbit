<script setup>
import LayoutHeader from "@/views/layout/components/layout-header.vue";
import LayoutNav from "@/views/layout/components/layout-nav.vue";
import LayoutFooter from "@/views/layout/components/layout-footer.vue";
</script>

<template>
  <layout-header />
  <layout-nav />
  <router-view />
  <layout-footer />
</template>

<style scoped lang="scss">

</style>
