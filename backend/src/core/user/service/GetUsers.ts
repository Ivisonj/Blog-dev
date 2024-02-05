import UseCase from "../../shared/UseCase"
import User from "../model/User"
import UserRepository from "./UserRepository"

export default class GetUsers implements UseCase<void, User[]> {
    constructor(private repository: UserRepository) {}

    async execute(): Promise<User[]> {
        return this.repository.getAllUsers()
    }
}