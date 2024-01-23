import User from "../model/User"

export default interface UserRepository {
    insert(user: User): Promise<void>
    searchByEmail(email: string): Promise<User | null>
    getAllUsers(): Promise<User[]>
    getUserById(id: string): Promise<User | null>
    deleteUser(id: string): Promise<void>
}