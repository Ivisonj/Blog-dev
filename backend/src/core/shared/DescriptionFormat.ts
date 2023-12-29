export default class DescriptionFormar {
    static validateDescription (description: string, min: number, max: number): string {
        if(!description) throw new Error('A descrição é obrigatória')
        if(description.length < min) throw new Error(`A descrição deve ter no mínimo ${min} caracteres`)
        if(description.length > max) throw new Error(`A descrição deve ter no máxima ${max} caracteres`)

        return description
    }
}