import express from "express"
import { Express } from 'express'
import request from 'supertest'
import bodyParser from 'body-parser'

import Article from "@/core/article/model/Article"
import ArticleRepository from "@/core/article/service/ArticleRepository"
import GetArticleById from "@/core/article/service/GetArticleById"
import GetArticleByIdController from "@/external/api/GetArticleByIdController"
import Erros from "@/core/shared/Erros"

describe("get articles by id controller", () => {
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
        useCase = new GetArticleById(articleRepositoryMock)
        new GetArticleByIdController(app, useCase)
    })

    it("should return status 200 and article by id", async () => {
        const articleId = '123'
        const article: Article = {
                id: articleId,
                title: 'Artigo Teste',
                description: 'Este artigo aborda...',
                imageUrl: '/link',
                category: 'web', 
                author: 'ivison',
                userId: '123',
                content: 'Artigo sobre testes automatizados'
        }

        articleRepositoryMock.getArticleById.mockImplementation((id: string) => {
            if(id !== articleId) {
                return Promise.resolve(null)
            }
            return Promise.resolve(article)
        })

        const res = await request(app)
            .get(`/api/article/${articleId}`)
            .send()

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(article)
    })

    it("should throw and error if there is not exists article", async () => {
        articleRepositoryMock.getArticleById.mockReturnValue(Promise.resolve(null))

        const res = await request(app)
            .get(`/api/article/123`)
            .send()
            
        expect(res.statusCode).toEqual(400)
        expect(res.text).toEqual(Erros.ARTICLE_NOT_EXISTS)
    })
})