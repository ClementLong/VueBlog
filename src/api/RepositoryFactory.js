import PostRepository from "./repository/postRepository.js"
import PageRepository from "./repository/pageRepository.js"
import CategoryRepository from "./repository/categoryRepository.js"
import CommentRepository from "./repository/commentRepository.js"

const repositories = {
    post: PostRepository,
    page: PageRepository,
    category: CategoryRepository,
    comment: CommentRepository,
}

export const RepositoryFactory = {
    get: name => repositories[name]
}