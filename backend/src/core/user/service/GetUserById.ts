import UseCase from "../../shared/UseCase"
import User from "../model/User"
import UserRepository from "./UserRepository"
import Erros from "../../shared/Erros"

export interface In {
    userId: string
}

export default class GetUserById implements UseCase<In, User> {
    constructor(private repository: UserRepository) {}

    async execute(In: In): Promise<User> {
        const user = await this.repository.getUserById(In.userId)

        if(!user) throw new Error(Erros.USER_NOT_EXISTS)

        return user
    }
}