import UseCase from "@/core/shared/UseCase"
import Article from "../model/Article"
import ArticleRepository from "./ArticleRepository"

interface In {
    articleId: string
}

export default class GetArticleById implements UseCase<In, Article> {
    constructor(private repository: ArticleRepository) {}

    execute(In: In): Promise<Article> {
        return this.repository.getArticleById(In.articleId)
    }
}