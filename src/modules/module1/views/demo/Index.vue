<template>
  <div>
    <div>count:{{ count }}</div>
    <div>doubleCount:{{ doubleCount() }}</div>
    <div @click="increment">increment</div>
    <div>-----------------</div>
    <div>num:{{ num }}</div>
    <div>doubleNum:{{ doubleNum() }}</div>
    <div @click="incrementNum">incrementNum</div>
  </div>
</template>

<script setup lang="ts" name="demo">
import { storeToRefs } from 'pinia'
import appStore from '@/common/store'

// import { getUser } from '@/api/user' // demo接口

const { count } = storeToRefs(appStore.module1)
const { increment, doubleCount } = appStore.module1

const { num } = storeToRefs(appStore.module2)
const { incrementNum, doubleNum } = appStore.module2

// // 接口请求
// function httpGetUser() {
//   getUser({})
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

// setTimeout(() => {
//   httpGetUser()
// }, 3000)
</script>

<style scoped lang="scss"></style>
