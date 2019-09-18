<template>
  <div class="postPreview m-t-2">
    <router-link class="postPreview_link c-black" :to="{ name: 'post', params: { slug }}">
      <div class="postPreview_image m-b-2" :style="{ 'background': 'url(' + image[0].source_url + ') center center' }">
        <div class="postPreview_hoverContainer">
          <div class="postPreview_hoverStyle f fjc-c fai-c fdc c-white">
            <div class="postPreview_hoverInfo f fdc fai-c">
              <div class="f fww m-b-2 fjc-c tf-text c-black ts-small">
                <span class="postPreview_tag m-b-1 m-h-1 p-h-2 p-v-1" v-for="category in categories[0]" :key="category.id">
                  {{ category.name }}
                </span>
                <span class="postPreview_tag m-b-1 m-h-1 p-h-2 p-v-1" v-for="category in categories[1]" :key="category.id">
                  {{ category.name }}
                </span>
              </div>
              <img class="postPreview_imageArticle" src="/images/article.svg" alt="article">
              <div class="tw-bold ts-paragraph m-t-2">
                Lire l'article
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="ts-smallTitle tf-title tw-bold c-c1 m-b-1" v-html="title">
      </h2>
      <!-- <div>
        {{ date }}
      </div> -->
      <p class="tf-text ts-paragraph" v-html="excerpt"></p>
    </router-link>
  </div>
</template>

<script src="./PostPreview.js"></script>
<style scoped lang="scss" src="./PostPreview.scss"></style>
