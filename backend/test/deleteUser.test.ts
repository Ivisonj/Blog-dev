import UserRepository from "@/core/user/service/UserRepository"
import DeleteUser from "@/core/user/service/DeleteUser"
import Erros from "@/core/shared/Erros"
import User from "@/core/user/model/User"

describe("delete user", () => {
    let userRepositoryMock: jest.Mocked<UserRepository>
    let deleteUserMock: DeleteUser

    beforeEach(() => {
        userRepositoryMock = {
            insert: jest.fn(), 
            searchByEmail: jest.fn(),
            getAllUsers: jest.fn(),
            getUserById: jest.fn(),
            deleteUser: jest.fn()
        } as jest.Mocked<UserRepository>
        deleteUserMock = new DeleteUser(userRepositoryMock)
    })

    it("should throw an error if user does not exists", async () => {
        const userId = '123456'

        userRepositoryMock.getUserById.mockReturnValue(Promise.resolve(null))

        await expect(deleteUserMock.execute({ userId })).rejects.toThrow(Erros.USER_NOT_EXISTS)
    })

    it("should delete user", async () => {
        const userId = '123456'
        const users: User = {
            id: userId, 
            name: 'Ivison Joel',
            email: 'ivison@mail.com',
            password: 'senha123'
        }
        userRepositoryMock.getUserById.mockReturnValue(Promise.resolve(users))

        await deleteUserMock.execute({ userId })

        expect(userRepositoryMock.getUserById).toHaveBeenCalledWith(userId)
        expect(userRepositoryMock.deleteUser).toHaveBeenCalledWith(userId)
    })
})