import Article from "@/core/article/model/Article"
import ArticleRepository from "@/core/article/service/ArticleRepository"
import { PrismaClient } from "@prisma/client"

export default class ArticleRepositoryPrisma implements ArticleRepository {
    private prisma: PrismaClient

    constructor() {
       this.prisma = new PrismaClient() 
    }
    
    async salve(article: Article): Promise<void> {
        const newArticle = { 
            id: article.id,
            title: article.title, 
            subtitle: article.subtitle,  
            createdAt: new Date(), 
            userId: article.userId, 
            content: article.content
        }
        
        await this.prisma.articles.upsert({
            where: { id: article.id }, 
            create: newArticle, 
            update: newArticle,
        })
    }

    async getAll(): Promise<Article[]> {
        const articles = await this.prisma.articles.findMany()
        return articles.map((article) => ({
            id: article.id,
            title: article.title, 
            subtitle: article.subtitle,
            createdAt: article.createdAt, 
            userId: article.userId, 
            content: article.content 
        }))
    }
}
