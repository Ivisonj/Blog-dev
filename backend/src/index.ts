import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import UserRepositoryPrisma from './external/db/UserRepositoryPrisma'
import PasswordCryto from './external/auth/PasswordCryto'
import RegisterUser from './core/user/service/RegisterUser'
import RegisterUserController from './external/api/RegisterUserController'

const app = express()
const port = process.env.API_PORT ?? 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`🔥 Servidor executando na porta ${port}!`)
})

//--------------------open routes------------------------------------//
const userRepository = new UserRepositoryPrisma()
const cryptoProvider = new PasswordCryto()

const registerUser = new RegisterUser(userRepository, cryptoProvider)

new RegisterUserController(app, registerUser)