<template>
  <div class="module-main">
    <div>{{ name }}</div>
    <router-link to="/module2/about">Go to about</router-link>
    <span> | </span>
    <router-link to="/module2/page">Go to page</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts" name="module2">
const name: string = 'module2'
</script>

<style scoped lang="scss"></style>
