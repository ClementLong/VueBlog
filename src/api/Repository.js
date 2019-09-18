import axios from 'axios'

const baseDomain = " https://blog.wissew.com/admin/web/wp-json/wp/v2/"
const baseURL = `${baseDomain}`

export default axios.create({
  baseURL
})