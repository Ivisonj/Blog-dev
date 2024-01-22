import UserRepository from "@/core/user/service/UserRepository"
import CryptoProvider from "@/core/user/service/CryptoProvider"
import UserLogin from "@/core/user/service/UserLogin"

describe('user login', () => {
    let userRepository: jest.Mocked<UserRepository>
    let cryptoProvider: jest.Mocked<CryptoProvider>
    let userLogin: UserLogin

    beforeEach(() => {
        userRepository = {
            insert: jest.fn(), 
            searchByEmail: jest.fn(),
            getAllUsers: jest.fn(),
            getUserById: jest.fn(),
            deleteUser: jest.fn()
        } as jest.Mocked<UserRepository>
        cryptoProvider = {
            encrypt: jest.fn(),
            compare: jest.fn()
        } as jest.Mocked<CryptoProvider>
        userLogin = new UserLogin(userRepository, cryptoProvider)
    })

    it('should searchByEmail with correct email', async () => {
        const user = {
            name: 'Ivison',
            email: 'ivison@mail.com', 
            password: 'senha123'
        }
        userRepository.searchByEmail.mockReturnValue(Promise.resolve(user))
        cryptoProvider.compare.mockReturnValue(true)

        await userLogin.execute({
            email: 'ivison@mail.com', 
            password: 'senha123'
        })

        expect(userRepository.searchByEmail).toHaveBeenCalledWith('ivison@mail.com')
        expect(cryptoProvider.compare).toHaveBeenCalledWith('senha123', 'senha123')
    })    
})