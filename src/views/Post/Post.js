import SinglePost from "@/components/SinglePost/SinglePost.vue"
import MorePost from "@/components/MorePost/MorePost.vue"
import { RepositoryFactory } from "@/api/RepositoryFactory"
const PostRepository = RepositoryFactory.get('post')

export default {
  name: 'post',
  data() {
    return {
      isLoad: false,
      post: Object,
      morePost: [],
    }
  },
  components: {
    SinglePost,
    MorePost
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      let getPost = await PostRepository.getBySlug(this.$route.params.slug)
      this.post = getPost.data[0]
      for (let i = 0; i < this.post.acf.more.length; i++) {
        let result = await PostRepository.getBySlug(this.post.acf.more[i].post_name)
        this.morePost.push(result.data[0])
      }
      this.isLoad = true
    }
  }
}
