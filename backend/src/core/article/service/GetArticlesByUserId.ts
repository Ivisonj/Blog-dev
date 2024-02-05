import UseCase from "../../shared/UseCase"
import Article from "../model/Article"
import ArticleRepository from "./ArticleRepository"
import Erros from "../../shared/Erros"

interface In {
    userId: string
}

export default class GetArticlesByUserId implements UseCase<In, Article[]> {
    constructor(private repository: ArticleRepository) {}
    
    async execute(In: In): Promise<Article[]> {
        const articles = await this.repository.getArticlesByUserId(In.userId)

        if(!articles) throw new Error(Erros.THERE_IS_NOT_REGISTED_ARTICLES)

        return articles
    }
}