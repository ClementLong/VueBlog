import { RepositoryFactory } from "@/api/RepositoryFactory"
const PageRepository = RepositoryFactory.get('page')

export default {
  name: 'Slider',
  data() {
    return {
      isLoad: false,
      posts: Array,
      categories: Array,
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      let homepage = await PageRepository.getBySlug('homepage')
      this.posts = homepage.data[0].acf.slider
      this.isLoad = true
    }
  }
}
