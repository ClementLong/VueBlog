import Repository from "@/api/Repository"

const resource = "/pages"

export default {
    getBySlug(slug) {
        return Repository.get(`${resource}?slug=${slug}&_embed`)
    }
}