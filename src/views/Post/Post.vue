<template>
  <div class="post">
    <div class="post_container" v-if="isLoad">
      <SinglePost 
        :title="post.title.rendered"
        :content="post.content.rendered"
      />
      <MorePost 
        :more="morePost"
      />
    </div>
    <div class="post_loader f fjc-c" v-else>
      Loading
    </div>
  </div>
</template>

<script src="./Post.js"></script>
<style scoped lang="scss" src="./Post.scss"></style>
