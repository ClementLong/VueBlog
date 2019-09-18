import Repository from "@/api/Repository"

const resource = "/comments"

export default {
    getAllByPostId(id, page = 1, limit= 40) {
        return Repository.get(`${resource}?post=${id}&page=${page}&per_page=${limit}`)
    },
    postByPostId(postId, name, email, content) { // Ok, it's a shitty function name
        return Repository.post(`${resource}`, { 
            author_name : name,
            author_email : email, 
            content : content, 
            post : postId 
        })
    }
}