export default class TextFormat {
    constructor(
        readonly complete: string, 
        readonly min: number = 3,
        readonly max: number = 100,
    ) {
        if(!complete) throw new Error('Campo obrigatório')
        if(complete.length < min) throw new Error(`O texto deve ter no mínimo ${min} caracteres`)
        if(complete.length > max) throw new Error(`O texto deve ter no máximo ${max} caracteres`)
    }
}