<template>
  <div class="module-main">
    <div>{{ name }}</div>
    <router-link to="/module1/demo">Go to demo</router-link>
    <span> | </span>
    <router-link to="/module1/home">Go to home</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts" name="module1">
const name: string = 'module1'
</script>

<style scoped lang="scss"></style>
