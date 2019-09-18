<template>
  <div class="container">
    <PostPreview 
      v-for="post in posts"
      :key="post.id"
      :title="post.title.rendered" 
      :date="post.date"
      :excerpt="post.excerpt.rendered"
      :slug="post.slug"
      :categories="post._embedded['wp:term']"
      :image="post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'] : [{source_url: 'default', name: post.title.rendered}]"
    />
    <div class="loader" v-if="!isLoad">
      Chargement...
    </div>
  </div>
</template>

<script src="./InfiniteList.js"></script>
<style scoped lang="scss" src="./InfiniteList.scss"></style>
