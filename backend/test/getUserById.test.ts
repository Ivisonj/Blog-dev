import User from "@/core/user/model/User"
import GetUserById from "@/core/user/service/GetUserById"
import UserRepository from "@/core/user/service/UserRepository"
import Erros from "@/core/shared/Erros"

describe('get user by id', () => {
    let userRepositoryMock: jest.Mocked<UserRepository>
    let getUserByIdMock: GetUserById

    beforeEach(() => {
        userRepositoryMock = {
            insert: jest.fn(), 
            searchByEmail: jest.fn(),
            getAllUsers: jest.fn(),
            getUserById: jest.fn(),
            deleteUser: jest.fn()
        } as jest.Mocked<UserRepository>
        getUserByIdMock = new GetUserById(userRepositoryMock)
    })

    it("should get user by id", async () => {
        const userId = '123456'
        const users: User = {
            id: userId, 
            name: 'Ivison Joel',
            email: 'ivison@mail.com',
            password: 'senha123'
        }
        userRepositoryMock.getUserById.mockReturnValue(Promise.resolve(users))
    
        const result = await getUserByIdMock.execute({ userId }) 
    
        expect(userRepositoryMock.getUserById).toHaveBeenCalledWith(userId)
        expect(result).toEqual(users)
    })
    
    it("should throw an error if user does not exist", async () => {
        const userId = '123456' 
        userRepositoryMock.getUserById.mockReturnValue(Promise.resolve(null))
    
        await expect(getUserByIdMock.execute({ userId })).rejects.toThrow(Erros.USER_NOT_EXISTS)
        expect(userRepositoryMock.getUserById).toHaveBeenCalledWith(userId)
    })
})