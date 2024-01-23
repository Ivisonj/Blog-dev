import UseCase from "@/core/shared/UseCase"
import UserRepository from "./UserRepository"
import Erros from "@/core/shared/Erros"

export interface In {
    userId: string
}

export default class DeleteUser implements UseCase<In, void> {
    constructor(private repository: UserRepository) {}

    async execute(In: In): Promise<void> {
        const user = await this.repository.getUserById(In.userId)
        
        if(!user) throw new Error(Erros.USER_NOT_EXISTS)

        await this.repository.deleteUser(In.userId)
    }
}