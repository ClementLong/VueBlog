<template>
  <div class="container p-t-4" v-if="isLoad">
    <div class="f fjc-b">
      <h2 class="ts-subtitle tf-title tw-bold c-black m-b-2">
        {{ categoryName }}
      </h2>
      <router-link class="td-none c-black p-h-2 p-v-1 s:p-v-2 m:p-v-2" :to="{ name : 'listing', params: { filter: categorySlug }}">Voir plus</router-link>
    </div>
    <div class="f fjc-s fai-s fww">
      <PostPreview
        v-for="post in posts.data"
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

<script src="./CategoryList.js"></script>
<style scoped lang="scss" src="./CategoryList.scss"></style>
