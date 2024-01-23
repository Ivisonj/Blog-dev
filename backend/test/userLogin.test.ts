import UserRepository from "@/core/user/service/UserRepository"
import CryptoProvider from "@/core/user/service/CryptoProvider"
import UserLogin from "@/core/user/service/UserLogin"
import Erros from "@/core/shared/Erros"

describe('user login', () => {
    let userRepositoryMock: jest.Mocked<UserRepository>
    let cryptoProviderMock: jest.Mocked<CryptoProvider>
    let userLoginMock: UserLogin

    beforeEach(() => {
        userRepositoryMock = {
            insert: jest.fn(), 
            searchByEmail: jest.fn(),
            getAllUsers: jest.fn(),
            getUserById: jest.fn(),
            deleteUser: jest.fn()
        } as jest.Mocked<UserRepository>
        cryptoProviderMock = {
            encrypt: jest.fn(),
            compare: jest.fn()
        } as jest.Mocked<CryptoProvider>
        userLoginMock = new UserLogin(userRepositoryMock, cryptoProviderMock)
    })

    it('should searchByEmail with correct email', async () => {
        const user = {
            name: 'Ivison',
            email: 'ivison@mail.com', 
            password: 'senha123'
        }
        userRepositoryMock.searchByEmail.mockReturnValue(Promise.resolve(user))
        cryptoProviderMock.compare.mockReturnValue(true)

        await userLoginMock.execute({
            email: 'ivison@mail.com', 
            password: 'senha123'
        })

        expect(userRepositoryMock.searchByEmail).toHaveBeenCalledWith('ivison@mail.com')
        expect(cryptoProviderMock.compare).toHaveBeenCalledWith('senha123', 'senha123')
    })
    
    it("should throw error if user don't exists", async () => {
        userRepositoryMock.searchByEmail.mockReturnValue(Promise.resolve(null))

        await expect(userLoginMock.execute({
            email: 'ivison@mail.com', 
            password: 'senha123'
        })).rejects.toThrow(Erros.USER_NOT_EXISTS)
    })

    it("should throw error if password isn't equals", async () => {
        const user = {
            name: 'Ivison',
            email: 'ivison@mail.com', 
            password: 'senha123'
        }
        userRepositoryMock.searchByEmail.mockReturnValue(Promise.resolve(user))
        cryptoProviderMock.compare.mockReturnValue(false)
    
        await expect(userLoginMock.execute({
            email: 'ivison@mail.com', 
            password: 'senha123'
        })).rejects.toThrow(Erros.INCORRECT_PASSWORD)
    })
})