<script setup>
import http from "@/utils/http";

http.get('home/category/head').then(res => {
  console.log(res)
})
</script>

<template>
  <div>
    <el-button type="primary">哈哈哈</el-button>
  </div>
</template>

<style lang="less" scoped>

</style>
