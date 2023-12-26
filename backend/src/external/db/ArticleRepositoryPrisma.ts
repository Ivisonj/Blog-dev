import Article from "@/core/article/model/Article"
import ArticleRepository from "@/core/article/service/ArticleRepository"
import { PrismaClient } from "@prisma/client"

export default class ArticleRepositoryPrisma implements ArticleRepository {
    private prisma: PrismaClient

    constructor() {
       this.prisma = new PrismaClient() 
    }
    
    async salve(article: Article): Promise<void> {
        const articleDB = { ...article.props, createdAt: new Date() }
        
        await this.prisma.articles.upsert({
            where: { id: article.id.value }, 
            create: articleDB, 
            update: articleDB,
        })
    }

    async getAll(): Promise<Article[]> {
        const articles = await this.prisma.articles.findMany()
        return articles.map((a: any) => new Article(a))
    }
}
