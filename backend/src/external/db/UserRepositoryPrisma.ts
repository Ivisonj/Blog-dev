import { PrismaClient } from "@prisma/client"
import User from "@/core/user/model/User"
import UserRepository from "@/core/user/service/UserRepository"

export default class UserRepositoryPrisma implements UserRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async insert(user: User): Promise<void> {
        const newUser = {
            id: user.id, 
            name: user.name, 
            email: user.email, 
            password: user.password
        }
        
        await this.prisma.users.upsert({
            where: { id: newUser.id }, 
            update: newUser, 
            create: newUser
        })
    }

    async searchByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.users.findUnique({
            where: { email: email }
        })
        if(!user) return null
        return user
    }

    async getAllUsers(): Promise<User[]> {
        const users = await this.prisma.users.findMany()
        return users.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        }))
    }
}