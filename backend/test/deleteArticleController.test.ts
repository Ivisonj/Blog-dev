import express from "express"
import { Express } from 'express'
import request from 'supertest'
import bodyParser from 'body-parser'

import Article from "@/core/article/model/Article"
import ArticleRepository from "@/core/article/service/ArticleRepository"
import DeleteArticle from "@/core/article/service/DeleteArticle"
import DeleteArticleController from "@/external/api/DeleteArticleController"
import Erros from "@/core/shared/Erros"

describe("delete article controller", () => {
    let app: Express
    let useCase
    let articleRepositoryMock: jest.Mocked<ArticleRepository>

    beforeEach(() => {
        articleRepositoryMock = {
            salve: jest.fn(),
            getAll: jest.fn(),
            getArticleById: jest.fn(),
            deleteArticle: jest.fn(), 
            getArticlesByUserId: jest.fn(), 
        } as jest.Mocked<ArticleRepository>

        app = express()
        app.use(bodyParser.json())
        useCase = new DeleteArticle(articleRepositoryMock)
        new DeleteArticleController(app, useCase)
    })

    it("should return status 200 and delete user", async () => {
        const articleId = '123'
        const article: Article = {
                id: articleId,
                title: 'Artigo Teste',
                description: 'Este artigo aborda...',
                imageUrl: '/link',
                category: 'web', 
                userId: '123456',
                content: 'Artigo sobre testes automatizados'
        }
        articleRepositoryMock.getArticleById.mockImplementation((id: string) => {
            if(id !== articleId) {
                return Promise.resolve(null)
            }
            return Promise.resolve(article)
        })

        const res = await request(app)
            .delete(`/api/article/delete/${articleId}`)
            .send()
        
        expect(res.statusCode).toEqual(200)
    })

    it("should throw an error if there is not an article", async () => {
        articleRepositoryMock.getArticleById.mockReturnValue(Promise.resolve(null))

        const res = await request(app)
            .delete(`/api/article/delete/123`)
            .send()
        
        expect(res.status).toEqual(400)
        expect(res.text).toEqual(Erros.ARTICLE_NOT_EXISTS)
    })
})