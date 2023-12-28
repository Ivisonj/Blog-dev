import UseCase from "@/core/shared/UseCase"
import ArticleRepository from "./ArticleRepository"

export interface In {
    articleId: string
}

export default class DeleteArticle implements UseCase<In, void> {
    constructor(private repository: ArticleRepository) {}

    async execute(In: In): Promise<void> {
        await this.repository.deleteArticle(In.articleId)
    }
}