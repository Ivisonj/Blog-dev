import UseCase from "../../shared/UseCase"
import Article from "../model/Article"
import ArticleRepository from "./ArticleRepository"
import Erros from "../../shared/Erros"

interface In {
    articleId: string
}

export default class GetArticleById implements UseCase<In, Article> {
    constructor(private repository: ArticleRepository) {}

    async execute(In: In): Promise<Article> {
        const article = await this.repository.getArticleById(In.articleId) 
        
        if(!article) throw new Error(Erros.ARTICLE_NOT_EXISTS)
        
        return article
    }
}