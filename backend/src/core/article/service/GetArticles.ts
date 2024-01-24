import UseCase from "@/core/shared/UseCase"
import Article from "../model/Article"
import ArticleRepository from "./ArticleRepository"
import Erros from "@/core/shared/Erros"

export default class GetArticles implements UseCase<void, Article[]> {
    constructor(private repository: ArticleRepository) {}

    async execute(): Promise<Article[]> {
        const articles = await this.repository.getAll()

        if(!articles) throw new Error(Erros.ARTICLE_NOT_EXISTS)

        return articles     
    }
} 