import User from "@/core/user/model/User"
import GetUsers from "@/core/user/service/GetUsers"
import UserRepository from "@/core/user/service/UserRepository"

describe('get users', () => {
    let userRepositoryMock: jest.Mocked<UserRepository>
    let getUsersMock: GetUsers

    beforeEach(() => {
        userRepositoryMock = {
            insert: jest.fn(), 
            searchByEmail: jest.fn(),
            getAllUsers: jest.fn(),
            getUserById: jest.fn(),
            deleteUser: jest.fn()
        } as jest.Mocked<UserRepository>
        getUsersMock = new GetUsers(userRepositoryMock)
    })

    it("should get all users", async () => {
        const users: User[] = [
            {
                id: '123456', 
                name: 'Ivison Joel',
                email: 'ivison@mail.com',
                password: 'senha123'
            }
        ]
        userRepositoryMock.getAllUsers.mockReturnValue(Promise.resolve(users))
    
        const result = await getUsersMock.execute()
        expect(result).toEqual(users)
        expect(userRepositoryMock.getAllUsers).toHaveBeenCalled()
    })    
})