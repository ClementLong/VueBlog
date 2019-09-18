import { RepositoryFactory } from "@/api/RepositoryFactory"
const CategoryRepository = RepositoryFactory.get('category')

export default {
  name: 'CategoryFilter',
  data() {
    return {
      isLoad: false,
      // showMore: false,
      categories: Array,
      options: [],
    }
  },
  created() {
    this.fetch().then(() => {
      this.categories.find((e) => {
        if(e.slug == this.$route.params.filter) {
          this.options.push(e.id)
        }
      })
      this.$emit('newFilter', this.options)
    })
  },
  methods: {
    async fetch() {
      let response = await CategoryRepository.getAll()
      this.categories = response.data
      this.isLoad = true
    },
    // more() {
    //   this.showMore = !this.showMore
    // },
    toggleOption(id) {
      if(this.options.includes(id)) {
        this.options.splice(this.options.indexOf(id), 1)
      } else {
        this.options.push(id)
      }
      this.$emit('newFilter', this.options)
    }
  }
}
