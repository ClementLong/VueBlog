import Repository from "@/api/Repository"

const resource = "/posts"

export default {
  getAll(page = 1, limit = 20) {
    return Repository.get(`${resource}?page=${page}&per_page=${limit}&_embed`)
  },
  getBySlug(slug) {
    return Repository.get(`${resource}?slug=${slug}&_embed`)
  },
  getByCategories(categories, page = 1, limit = 20) {
    return Repository.get(`${resource}?categories=${categories}&page=${page}&per_page=${limit}&_embed`)
  },
  getBySearch(search, page = 1, limit = 20) {
    return Repository.get(`${resource}?search=${search}&page=${page}&per_page=${limit}&_embed`)
  },
  // getPost(slug) {
  //   var result = []
  //   Repository.get(`${resource}?slug=${slug}&_embed`).then((response) => {
  //     result = response
  //     result.data[0].more = []
  //     result.data[0].acf.more.forEach(element => {
  //       Repository.get(`${resource}?slug=${element.post_name}&_embed`).then((moreResponse) => {
  //         response.data[0].more.push(moreResponse)
  //       })
  //     })
  //   })
  //   return result
  // },
}