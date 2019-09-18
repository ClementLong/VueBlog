<template>
  <div
    class="container"
  >
    <nav class="f fjc-b m-v-2 fai-s" role="toolbar">
      <CategoryFilter @newFilter="newFilter" />
      <Search @newSearch="newSearch" />
    </nav>
    <InfiniteList
      :posts="posts"
      :isLoad="isLoad"
      @addPage="addPage"
    />
  </div>
</template>

<script src="./Listing.js"></script>
<style scoped lang="scss" src="./Listing.scss"></style>
