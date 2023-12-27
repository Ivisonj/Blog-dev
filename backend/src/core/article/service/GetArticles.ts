import UseCase from "@/core/shared/UseCase"
import Article from "../model/Article"
import ArticleRepository from "./ArticleRepository"

export default class GetArticles implements UseCase<void, Article[]> {
    constructor(private repository: ArticleRepository) {}

    async execute(): Promise<Article[]> {
        return this.repository.getAll()    
    }
}