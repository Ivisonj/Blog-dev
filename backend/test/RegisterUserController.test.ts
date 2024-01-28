import express from "express"
import { Express } from 'express'
import request from 'supertest'
import bodyParser from 'body-parser'

import RegisterUser from "@/core/user/service/RegisterUser"
import UserRepository from "@/core/user/service/UserRepository"
import CryptoProvider from "@/core/user/service/CryptoProvider"
import RegisterUserController from "@/external/api/RegisterUserController"
import User from "@/core/user/model/User"

describe("RegisterUserController", () => {
    let app: Express
    let useCase
    let userRepository: jest.Mocked<UserRepository>
    let cryptoProvider: jest.Mocked<CryptoProvider>

    beforeEach(() => {
        userRepository = {
            insert: jest.fn(), 
            searchByEmail: jest.fn(),
            getAllUsers: jest.fn(),
            getUserById: jest.fn(),
            deleteUser: jest.fn()
        } as jest.Mocked<UserRepository>
        cryptoProvider = {
            encrypt: jest.fn(),
            compare: jest.fn()
        } as jest.Mocked<CryptoProvider>

        app = express()
        app.use(bodyParser.json())
        useCase = new RegisterUser(userRepository, cryptoProvider)
        new RegisterUserController(app, useCase)
    })

    it("should return status 201 and register a new user", async () => {
        const res = await request(app)
            .post('/api/user/register')
            .send({
                name: 'Ivison', 
                email: 'ivison@mail.com', 
                password: 'senha123'
            })
        
        expect(res.statusCode).toEqual(201)
        expect(res.text).toEqual('Usuário cadastrado com secesso!')
    })

    it("should throw an error when the user already exists", async () => {
        const user: User = {
            name: 'Ivison', 
            email: 'ivison@mail.com', 
            password: 'senha123'
        }

        userRepository.searchByEmail.mockReturnValue(Promise.resolve(user))
                            
        const res = await request(app)
            .post('/api/user/register')
            .send({
                name: 'Ivison', 
                email: 'ivison@mail.com', 
                password: 'senha123'
            })
        expect(res.statusCode).toEqual(400)
        expect(res.text).toEqual('Usuário já existe')
    })
})