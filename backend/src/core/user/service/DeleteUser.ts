import UseCase from "@/core/shared/UseCase";
import UserRepository from "./UserRepository";

export interface In {
    userId: string
}

export default class DeleUser implements UseCase<In, void> {
    constructor(private repository: UserRepository) {}

    async execute(In: In): Promise<void> {
        await this.repository.deleteUser(In.userId)
    }
}