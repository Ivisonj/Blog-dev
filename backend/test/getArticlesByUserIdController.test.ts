import express from "express"
import { Express } from 'express'
import request from 'supertest'
import bodyParser from 'body-parser'

import Article from "@/core/article/model/Article"
import ArticleRepository from "@/core/article/service/ArticleRepository"
import GetArticlesByUserId from "@/core/article/service/GetArticlesByUserId"
import GetArticlesByUserIdController from "@/external/api/GetArticlesByUserIdController"
import Erros from "@/core/shared/Erros"

describe("get article by user id", () => {
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
        useCase = new GetArticlesByUserId(articleRepositoryMock)
        new GetArticlesByUserIdController(app, useCase)
    })

    it("should return status 200 and articles by user id", async () => {
        const userId = '123'
        const articles: Article[] = [
            {
                id: '123',
                title: 'Artigo Teste',
                description: 'Este artigo aborda...',
                imageUrl: '/link',
                category: 'web', 
                userId: userId,
                content: 'Artigo sobre testes automatizados'
            }
        ]
        articleRepositoryMock.getArticlesByUserId.mockImplementation((id: string) => {
            if(id !== userId) {
                return Promise.resolve(null)
            }
            return Promise.resolve(articles)
        })

        const res = await request(app)
            .get(`/api/my-articles/${userId}`)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(articles)
    })

    it("should throw an error if there are not exists articles", async () => {
        articleRepositoryMock.getArticlesByUserId.mockReturnValue(Promise.resolve(null))

        const res = await request(app)
            .get(`/api/my-articles/123`)

        expect(res.statusCode).toEqual(400)
        expect(res.text).toEqual(Erros.THERE_IS_NOT_REGISTED_ARTICLES)
    })
})