import User from "../model/User"

export default interface UserRepository {
    insert(user: User): Promise<void>
    searchByEmail(email: string): Promise<User | null>
}