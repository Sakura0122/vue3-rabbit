import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/api/layout";

export const useCategoryStore = defineStore('category', () => {
  // 获取分类数据
  const categoryList = ref([])
  const getCategoryData = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }

  return { categoryList, getCategoryData }
})
