<script setup>
import LayoutHeader from "@/views/layout/components/layout-header.vue";
import LayoutNav from "@/views/layout/components/layout-nav.vue";
import LayoutFooter from "@/views/layout/components/layout-footer.vue";
import LayoutFixed from "@/views/layout/components/layout-fixed.vue";
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";

defineOptions({
  name: 'Layout'
})

const category = useCategoryStore()
onMounted(() => {
  category.getCategoryData()
})
</script>

<template>
  <layout-fixed />
  <layout-nav />
  <layout-header />
  <router-view />
  <layout-footer />
</template>

<style scoped lang="scss">

</style>
