import Article from "../model/Article"

export default interface ArticleRepository {
    salve(article: Article): Promise<void>
    getAll(): Promise<Article[] | null>
    getArticleById(id: string):Promise<Article | null>
    deleteArticle(id: string): Promise<void>
    getArticlesByUserId(id: string): Promise<Article[] | null>   
}