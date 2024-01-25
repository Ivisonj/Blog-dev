export default class NameFormat {
    static validateName(name: string, min: number, max: number): string {
        if(!name) throw new Error('Nome é obrigatório')
        if(name.length < min) throw new Error(`Nome deve ter no mínimo ${min} caracteres`)
        if(name.length > max) throw new Error(`Nome deve ter no máximo ${max} caracteres`)
        
        return name
    }
}