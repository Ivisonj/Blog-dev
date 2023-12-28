export default class TitleFormar {
    static validateTitle (title: string, min: number, max: number): string {
        if(!title) throw new Error('O título é obrigatório')
        if(title.length < min) throw new Error(`O título deve ter no mínimo ${min} caracteres`)
        if(title.length > max) throw new Error(`O título deve ter no máxima ${max} caracteres`)

        return title
    }
}