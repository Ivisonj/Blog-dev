export default class ContentFormat {
    static(content: string, min: number, max: number): string {
        if(!content) throw new Error('Campo obrigatório')
        if(content.length < min) throw new Error(`O título deve ter no mínimo ${min} caracteres`)
        if(content.length > max) throw new Error(`O título deve ter no máxima ${max} caracteres`)

        return content
    }
}