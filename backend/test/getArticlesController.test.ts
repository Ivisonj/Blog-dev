import express from "express"
import { Express } from 'express'
import request from 'supertest'
import bodyParser from 'body-parser'

import Article from "@/core/article/model/Article"
import ArticleRepository from "@/core/article/service/ArticleRepository"
import GetArticles from "@/core/article/service/GetArticles"
import GetArticlesController from "@/external/api/GetArticlesController"
import Erros from "@/core/shared/Erros"

describe("get articles controller", () => {
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
        useCase = new GetArticles(articleRepositoryMock)
        new GetArticlesController(app, useCase)
    })

    it("should return status 200 and get all articles", async () => {
        const articles: Article[] = [
            {
                id: '123',
                title: 'Artigo Teste',
                description: 'Este artigo aborda...',
                imageUrl: '/link',
                category: 'web', 
                author: 'ivison',
                userId: '123',
                content: 'Artigo sobre testes automatizados'
            }
        ]

        articleRepositoryMock.getAll.mockReturnValue(Promise.resolve(articles))

        const res = await request(app)
            .get('/api/articles')
            .send()

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(articles)
    })

    it("should throw an error if there are not exists articles", async () => {
        articleRepositoryMock.getAll.mockReturnValue(Promise.resolve(null))

        const res = await request(app)
            .get('/api/articles')
            .send()

        expect(res.statusCode).toEqual(400)
        expect(res.text).toEqual(Erros.ARTICLE_NOT_EXISTS)
    })
})