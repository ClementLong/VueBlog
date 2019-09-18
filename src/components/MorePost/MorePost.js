import PostPreview from "@/components/PostPreview/PostPreview.vue"

export default {
  name: 'MorePost',
  props: {
    more: Array,
  },
  components: {
    PostPreview
  },
}
