export default {
  name: 'Nav',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen
    }
  }
}
