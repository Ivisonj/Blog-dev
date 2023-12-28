import UseCase from "@/core/shared/UseCase"
import User from "../model/User"
import UserRepository from "./UserRepository"

export interface In {
    userId: string
}

export default class GetUserById implements UseCase<In, User[]> {
    constructor(private repository: UserRepository) {}

    execute(In: In): Promise<User[]> {
        return this.repository.getUserById(In.userId)
    }
}