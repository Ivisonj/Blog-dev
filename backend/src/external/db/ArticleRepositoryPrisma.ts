import Article from "@/core/article/model/Article"
import ArticleRepository from "@/core/article/service/ArticleRepository"
import Erros from "@/core/shared/Erros"
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
            description: article.description,
            imageUrl: article.imageUrl,
            category: article.category,  
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
            description: article.description,
            imageUrl: article.imageUrl,
            category: article.category,  
            createdAt: article.createdAt, 
            userId: article.userId, 
            content: article.content
        }))
    }

    async getArticleById(id: string): Promise<Article[] | null> {
        const article = await this.prisma.articles.findUnique({
            where: { id: id }
        })
        if(!article) throw new Error('Artigo não existe')
        return {
            id: article.id,
            title: article.title, 
            description: article.description,
            imageUrl: article.imageUrl,
            category: article.category,  
            createdAt: article.createdAt, 
            userId: article.userId, 
            content: article.content 
        }
    }

    async deleteArticle(id: string): Promise<void> {
        const article = await this.prisma.articles.delete({
            where: { id: id }
        })    
    }
}
