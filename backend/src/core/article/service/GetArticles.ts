import UseCase from "../../shared/UseCase"
import Article from "../model/Article"
import ArticleRepository from "./ArticleRepository"
import Erros from "../../shared/Erros"

export default class GetArticles implements UseCase<void, Article[]> {
    constructor(private repository: ArticleRepository) {}

    async execute(): Promise<Article[]> {
        const articles = await this.repository.getAll()
        
        return articles     
    }
} 