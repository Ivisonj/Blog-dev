import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import UserRepositoryPrisma from './external/db/UserRepositoryPrisma'
import PasswordCryto from './external/auth/PasswordCryto'
import RegisterUser from './core/user/service/RegisterUser'
import RegisterUserController from './external/api/RegisterUserController'
import GetUsers from './core/user/service/GetUsers'
import GetUsersController from './external/api/GetUsersController'
import UserLogin from './core/user/service/UserLogin'
import UserLoginController from './external/api/UserLoginController'
import UserMiddleware from './external/api/UserMiddleware'
import ArticleRepositoryPrisma from './external/db/ArticleRepositoryPrisma'
import SaveArticle from './core/article/service/SaveArticle'
import SalveArticleController from './external/api/SalveArticleController'
import GetArticles from './core/article/service/GetArticles'
import GetArticlesController from './external/api/GetArticlesController'

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

//---Register User
const registerUser = new RegisterUser(userRepository, cryptoProvider)

new RegisterUserController(app, registerUser)

//---Login
const userLogin = new UserLogin(userRepository, cryptoProvider)

new UserLoginController(app, userLogin)

//-----------------Protected routes---------------------------------//
//---Get All Users
const userMid = UserMiddleware(userRepository)

const getUsers = new GetUsers(userRepository)
new GetUsersController(app, getUsers, userMid)

//---salve article
const articleRepository = new ArticleRepositoryPrisma()

const saveArticle = new SaveArticle(articleRepository)

new SalveArticleController(app, saveArticle, userMid)

//---Get all Articles
const getArticles = new GetArticles(articleRepository)

new GetArticlesController(app, getArticles, userMid)