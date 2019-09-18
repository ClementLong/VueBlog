<template>
  <div class="container m-v-4">
    <h2 class="ts-subtitle tf-title tw-bold c-black m-b-2">
      Voir plus d'article
    </h2>
    <div class="f fjc-b s:fdc s:fai-c">
      <PostPreview
        v-for="post in more"
        :key="post.id"
        :title="post.title.rendered" 
        :date="post.date"
        :excerpt="post.excerpt.rendered"
        :slug="post.slug"
        :categories="post._embedded['wp:term']"
        :image="post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'] : [{source_url: 'default', name: post.title.rendered}]"
      />  
    </div>
  </div>
</template>

<script src="./MorePost.js"></script>
<style scoped lang="scss" src="./MorePost.scss"></style>
