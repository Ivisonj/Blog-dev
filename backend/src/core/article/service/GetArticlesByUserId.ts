import UseCase from "@/core/shared/UseCase"
import Article from "../model/Article"
import ArticleRepository from "./ArticleRepository"

interface In {
    userId: string
}

export default class GetArticlesByUserId implements UseCase<In, Article> {
    constructor(private repository: ArticleRepository) {}
    
    async execute(In: In): Promise<Article> {
        return this.repository.getArticlesByUserId(In.userId)
    }
}