export default class PasswordFormat {
    static validatePassword(password: string, min: number, max: number): string {
        if(!password) throw new Error('A senha é obrigatória')
        if(password.length < min) throw new Error(`A senha deve ter no mínimo ${min} caracteres`)
        if(password.length > max) throw new Error(`A senha deve ter no máximo ${max} caracteres`)

        return password
    }
}