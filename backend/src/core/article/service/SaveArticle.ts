import UseCase from "@/core/shared/UseCase"
import Article from "../model/Article"
import ArticleRepository from "./ArticleRepository"
import Id from "@/core/shared/Id"

export default class SaveArticle implements UseCase<Article, void> {
    constructor(private repository: ArticleRepository) {}

    async execute(article: Article): Promise<void> {
        const newArticle: Article = {
            id: Id.generateHash(), 
            title: article.title, 
            subtitle: article.subtitle, 
            userId: article.userId, 
            content: article.content
        }
        
        await this.repository.salve(newArticle)
    }
}