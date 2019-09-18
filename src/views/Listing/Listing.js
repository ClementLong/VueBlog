import InfiniteList from "@/components/InfiniteList/InfiniteList.vue"
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter.vue"
import Search from '@/components/Search/Search.vue'

import { RepositoryFactory } from "@/api/RepositoryFactory"
const PostRepository = RepositoryFactory.get('post')

export default {
  name: 'listing',
  data() {
    return {
      requestType: String,
      posts: [],
      page: 1,
      pageMax: Number,
      query: String,
      isLoad: Boolean,
    }
  },
  components: {
    InfiniteList,
    CategoryFilter,
    Search
  },
  created() {
    if(!this.$route.params.filter) {
      this.requestType = 'all'
      this.fetch()
    }
    this.isLoad = false
  },
  methods: {
    async fetch() {
      let response
      if(this.requestType == 'all') {
        response = await PostRepository.getAll(this.page)
      } else if(this.requestType == 'search') {
        response = await PostRepository.getBySearch(this.query, this.page)
      } else if(this.requestType == 'filter') {
        response = await PostRepository.getByCategories(this.query, this.page)
      }
      this.pageMax = response.headers['x-wp-totalpages']
      this.posts = this.posts.concat(response.data)
      this.isLoad = true
    },
    newFilter(filter) {
      this.newRequest('filter', filter)
    },
    newSearch(search) {
      this.newRequest('search', search)
    },
    newRequest(type, arg) {
      if(arg.length != 0) {
        this.requestType = type
        this.query = arg
      } else {
        this.requestType = 'all'
      }
      this.page = 1
      this.posts = []
      this.isLoad = false
      this.fetch()
    },
    addPage() {
      if(this.isLoad && this.page < this.pageMax) {
        this.page++
        this.isLoad = false
        this.fetch()
      }
    }
  }
}
