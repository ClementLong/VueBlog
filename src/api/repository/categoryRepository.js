import Repository from "@/api/Repository"

const resource = "/categories"

export default {
    getAll() {
        return Repository.get(`${resource}?hide_empty=true`)
    },
    getBySlug(slug) {
        return Repository.get(`${resource}?slug=${slug}&hide_empty=true`)
    },
}