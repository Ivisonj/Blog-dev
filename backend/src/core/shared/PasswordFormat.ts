export default class PasswordFormat {
    constructor(
        readonly password: string, 
        readonly min: 3, 
        readonly max: 20
    ) {
        if(!password) throw new Error('A senha é obrigatória')
        if(password.length < min) throw new Error(`A senha deve ter no mínimo ${min} caracteres`)
        if(password.length > max) throw new Error(`A senha deve ter no máximo ${max} caracteres`)
    }
}