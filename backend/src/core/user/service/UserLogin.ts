import UseCase from "@/core/shared/UseCase"
import User from "../model/User"
import UserRepository from "./UserRepository"
import CryptoProvider from "./CryptoProvider"
import Erros from "@/core/shared/Erros"

interface LoginData {
    email: string
    password: string
}

export default class UserLogin implements UseCase<LoginData, User> {
    constructor(
        private respository: UserRepository,
        private cryptoProvider: CryptoProvider
    ) {}

    async execute(loginData: LoginData): Promise<User> {
       const userExists = await this.respository.searchByEmail(loginData.email)
    
        if(!userExists) throw new Error(Erros.USER_NOT_EXISTS)

        const equalsPassword = this.cryptoProvider.compare(loginData.password, userExists.password!)

        if(!equalsPassword) throw new Error(Erros.INCORRECT_PASSWORD)

        return { ...userExists, password: undefined }
    }
}