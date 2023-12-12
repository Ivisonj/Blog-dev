export default class NameFormat {
    constructor(
        readonly complete: string, 
        readonly min: number = 3,
        readonly max: number = 100,
    ) {
        if(!complete) throw new Error('Nome é obrigatório')
        if(complete.length < min) throw new Error(`Nome deve ter no mínimo ${min} caracteres`)
        if(complete.length > max) throw new Error(`Nome deve ter no máximo ${max} caracteres`)
        if(!complete.match(/^[a-zA-Z\u00C0-\u00FF ]+$/)) throw new Error('Nome deve conter apenas letras')
    }
}