export default {
  name: 'Search',
  methods: {
    search(event) {
      this.$emit('newSearch', event.srcElement.value)
    }
  }
}
