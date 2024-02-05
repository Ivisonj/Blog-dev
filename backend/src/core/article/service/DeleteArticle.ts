import UseCase from "../../shared/UseCase"
import ArticleRepository from "./ArticleRepository"
import Erros from "../../shared/Erros"

export interface In {
    articleId: string
}

export default class DeleteArticle implements UseCase<In, void> {
    constructor(private repository: ArticleRepository) {}

    async execute(In: In): Promise<void> {
        const article = await this.repository.getArticleById(In.articleId)

        if(!article) throw new Error(Erros.ARTICLE_NOT_EXISTS)

        await this.repository.deleteArticle(In.articleId)
    }
}