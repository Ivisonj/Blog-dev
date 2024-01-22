import User from "@/core/user/model/User"
import RegisterUser from "@/core/user/service/RegisterUser"
import UserRepository from "@/core/user/service/UserRepository"
import CryptoProvider from "@/core/user/service/CryptoProvider"

describe('Register user', () => {
    let userRepository: jest.Mocked<UserRepository>
    let cryptoProvider: jest.Mocked<CryptoProvider>
    let registerUser: RegisterUser

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
        registerUser = new RegisterUser(userRepository, cryptoProvider)
    })

    it('should validate and encrypt password', async () => {
        const user: User = {
            name: 'Ivison', 
            email: 'ivison@mail.com', 
            password: 'senha123'
        }
        cryptoProvider.encrypt.mockReturnValue('encryptedPassword')
        userRepository.searchByEmail.mockReturnValue(Promise.resolve(null))

        await registerUser.execute(user)

        expect(cryptoProvider.encrypt).toHaveBeenCalledWith(user.password)
        expect(userRepository.insert).toHaveBeenLastCalledWith({
            ...user,
            id: expect.any(String), 
            password: 'encryptedPassword'
        })
    })

    it('should throw error if user already exists', async () => {
        const user: User = {
            name: 'Ivison',
            email: 'ivison@mail.com', 
            password: 'senha123'
        }
        userRepository.searchByEmail.mockReturnValue(Promise.resolve(user))

        await expect(registerUser.execute(user)).rejects.toThrow('Usuário já existe')
    })
})