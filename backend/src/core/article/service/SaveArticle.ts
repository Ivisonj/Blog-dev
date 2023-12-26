import UseCase from "@/core/shared/UseCase"
import Article from "../model/Article"
import ArticleRepository from "./ArticleRepository"

export default class SaveArticle implements UseCase<Article, void> {
    constructor(private repository: ArticleRepository) {}

    async execute(article: Article): Promise<void> {
        await this.repository.salve(article)
    }
}