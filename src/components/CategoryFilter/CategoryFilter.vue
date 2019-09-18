<template>
  <div class="filter f fdc">
    <div class="f fai-c" v-if="isLoad">
      <div
        class="filter_item tf-text c-black ts-small m-h-1 p-h-1 p-v-1"
        v-for="category in categories" 
        :key="category.id"
        :class="{'filter_item-active':options.includes(category.id)}"
        @click="toggleOption(category.id)"
      >
        {{ category.name }}
      </div>
      <!-- <div class="filter_button td-u m-l-2" role="button" v-on:click="more"> -->
        <!-- Plus de filtre -->
      <!-- </div> -->
    </div>
    <!-- <div class="filter_more m-v-2 m-h-2" v-if="showMore"> -->
      <!-- More :  -->
    <!-- </div> -->
  </div>
</template>

<script src="./CategoryFilter.js"></script>
<style scoped lang="scss" src="./CategoryFilter.scss"></style>
