import UseCase from "../../shared/UseCase"
import Article from "../model/Article"
import ArticleRepository from "./ArticleRepository"
import Id from "../../shared/Id"
import TitleFormar from "../../shared/TitileFormat"
import ContentFormat from "../../shared/ContentFormat"
import DescriptionFormar from "../../shared/DescriptionFormat"

export default class SaveArticle implements UseCase<Article, void> {
    constructor(private repository: ArticleRepository) {}

    async execute(article: Article): Promise<void> {
        const newArticle: Article = {
            id: Id.generateHash(), 
            title: TitleFormar.validateTitle(article.title, 3, 30), 
            description: DescriptionFormar.validateDescription(article.description, 5, 100), 
            imageUrl: article.imageUrl,
            category: article.category,
            author: article.author,
            userId: article.userId, 
            content: ContentFormat.validateContent(article.content, 10, 4000)
        }
        
        await this.repository.salve(newArticle)
    }
}