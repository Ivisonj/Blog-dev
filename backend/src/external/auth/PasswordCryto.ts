import bcrypt from "bcrypt"
import CryptoProvider from "../../core/user/service/CryptoProvider"

export default class PasswordCryto implements CryptoProvider {
    encrypt(password: string): string {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    compare(password: string, encryptPassword: string): boolean {
        return bcrypt.compareSync(password, encryptPassword)
    }
}