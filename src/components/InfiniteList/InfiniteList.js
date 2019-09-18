import PostPreview from "@/components/PostPreview/PostPreview.vue"

export default {
  name: 'InfiniteList',
  props: {
    posts: Array,
    isLoad: Boolean,
  },
  components: {
    PostPreview
  },
  created() {
    window.addEventListener('scroll', this.more);
  },
  methods: {
    // Load more if scrool to end of the list and no limit
    more() {
      if(window.scrollY + window.innerHeight > this.$el.offsetTop + this.$el.offsetHeight) {
        this.$emit('addPage')
      }
    }
  }
}
