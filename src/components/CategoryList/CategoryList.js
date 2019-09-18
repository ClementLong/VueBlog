import PostPreview from "@/components/PostPreview/PostPreview.vue"
import { RepositoryFactory } from "@/api/RepositoryFactory"
const PostRepository = RepositoryFactory.get('post')
const CategoryRepository = RepositoryFactory.get('category')

export default {
  name: 'CategoryList',
  props: {
    category: String,
  },
  data() {
    return {
      isLoad: false,
      posts: Array,
      categories: Array,
      categoryName: String,
      categorySlug: String,
    }
  },
  components: {
    PostPreview
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const category = await CategoryRepository.getBySlug(this.category)
      this.categoryName = category.data[0].name
      this.categorySlug = category.data[0].slug
      this.posts = await PostRepository.getByCategories(category.data[0].id, 1, 3)
      this.isLoad = true
    }
  }
}
