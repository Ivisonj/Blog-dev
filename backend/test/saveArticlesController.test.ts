import express from "express"
import { Express } from 'express'
import request from 'supertest'
import bodyParser from 'body-parser'

import ArticleRepository from "@/core/article/service/ArticleRepository"
import SaveArticle from "@/core/article/service/SaveArticle"
import SalveArticleController from "@/external/api/SalveArticleController"

describe("save articles controller", () => {
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
        useCase = new SaveArticle(articleRepositoryMock)
        new SalveArticleController(app, useCase)
    })

    it("should return status 200 and save article", async () => {
        const res = await request(app)
            .post('/api/article/salve')
            .send({
                title: 'Artigo Teste',
                description: 'Este artigo aborda...',
                imageUrl: '/link',
                category: 'web', 
                userId: '123',
                content: 'Artigo sobre testes automatizados'
            })

        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual('Artigo salvo com sucesso!')
    })
})