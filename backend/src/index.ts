import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'

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
import GetUserById from './core/user/service/GetUserById'
import GetUserByIdController from './external/api/GetUserByIdController'
import DeleteUser from './core/user/service/DeleteUser'
import DeleteUserController from './external/api/DeleteUserController'
import GetArticleById from './core/article/service/GetArticleById'
import GetArticleByIdController from './external/api/GetArticleByIdController'
import DeleteArticle from './core/article/service/DeleteArticle'
import DeleteArticleController from './external/api/DeleteArticleController'
import GetArticlesByUserId from './core/article/service/GetArticlesByUserId'
import GetArticlesByUserIdController from './external/api/GetArticlesByUserIdController'

const app = express()
const port = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`🔥 Servidor executando na porta ${port}!`)
})

//--------------------open routes------------------------------------//
const userRepository = new UserRepositoryPrisma()
const articleRepository = new ArticleRepositoryPrisma()
const cryptoProvider = new PasswordCryto()

//---Register User
const registerUser = new RegisterUser(userRepository, cryptoProvider)

new RegisterUserController(app, registerUser)

//---Login
const userLogin = new UserLogin(userRepository, cryptoProvider)

new UserLoginController(app, userLogin)

//---Get all Articles
const getArticles = new GetArticles(articleRepository)

new GetArticlesController(app, getArticles)

//--- get article by Id
const getArticleById = new GetArticleById(articleRepository)
new GetArticleByIdController(app, getArticleById)

//-----------------Protected routes---------------------------------//
//---Get All Users
const userMid = UserMiddleware(userRepository)

const getUsers = new GetUsers(userRepository)
new GetUsersController(app, getUsers, userMid)

//---Get User By ID
const getUserById = new GetUserById(userRepository)
new GetUserByIdController(app, getUserById, userMid)

//---Delete user
const deleteUser = new DeleteUser(userRepository)
new DeleteUserController(app, deleteUser, userMid)

//---salve article
const saveArticle = new SaveArticle(articleRepository)
new SalveArticleController(app, saveArticle, userMid)

//get articles by userId
const getArticlesByUserId = new GetArticlesByUserId(articleRepository)
new GetArticlesByUserIdController(app, getArticlesByUserId, userMid)

//---delete article
const deleteArticle = new DeleteArticle(articleRepository)
new DeleteArticleController(app, deleteArticle, userMid)