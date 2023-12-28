import UseCase from "@/core/shared/UseCase"
import Article from "../model/Article"
import ArticleRepository from "./ArticleRepository"
import Id from "@/core/shared/Id"
import TitleFormar from "@/core/shared/TitileFormat"
import ContentFormat from "@/core/shared/ContentFormat"

export default class SaveArticle implements UseCase<Article, void> {
    constructor(private repository: ArticleRepository) {}

    async execute(article: Article): Promise<void> {
        const newArticle: Article = {
            id: Id.generateHash(), 
            title: TitleFormar.validateTitle(article.title, 3, 15), 
            subtitle: article.subtitle, 
            userId: article.userId!, 
            content: ContentFormat.validateContent(article.content, 10, 4000)
        }
        
        await this.repository.salve(newArticle)
    }
}