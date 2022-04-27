import { ref } from 'vue'
import { defineStore } from 'pinia'

// 使用setup模式定义
export const initStore2 = defineStore('store2', () => {
  const num = ref<number>(1)

  // 改值
  function incrementNum() {
    num.value += 1
  }

  // 计算属性
  function doubleNum() {
    return num.value * 2
  }

  return { num, incrementNum, doubleNum }
})

export default initStore2
