import UseCase from "@/core/shared/UseCase"
import User from "../model/User"
import UserRepository from "./UserRepository"
import CryptoProvider from "./CryptoProvider"
import Erros from "@/core/shared/Erros"
import Id from "@/core/shared/Id"
import NameFormat from "@/core/shared/NameFormat "
import EmailFormat from "@/core/shared/EmailFormat"
import PasswordFormat from "@/core/shared/PasswordFormat"

export default class RegisterUser implements UseCase<User, void> {
    constructor(
        private userRepository: UserRepository,
        private cryptoProvider: CryptoProvider
    ) {}

    async execute(user: User): Promise<void> {
        PasswordFormat.validatePassword(user.password, 3, 10)

        const encripPassword = this.cryptoProvider.encrypt(user.password)

        const userExists = await this.userRepository.searchByEmail(user.email)
        if(userExists) throw new Error(Erros.USER_ALREADY_EXISTS)

        const newUser: User = {
            id: Id.generateHash(),
            name: NameFormat.validateName(user.name, 3, 30), 
            email: EmailFormat.validateEmail(user.email), 
            password: encripPassword
        }

       await this.userRepository.insert(newUser)
    }
}
