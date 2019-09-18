<template>
  <div class="slider f fjc-b fdc">
    <div
      v-for="post in posts"
      :key="post.ID"
      class="slider_item"
      style="background: url('https://picsum.photos/200/300'); background-size: cover;"
    >
      <div class="slider_style">
        <div
          class="slider_title ts-title tf-title tw-bold c-black m-h-2 m-v-2"
        >
          {{ post.post_title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Slider.js"></script>
<style scoped lang="scss" src="./Slider.scss"></style>
