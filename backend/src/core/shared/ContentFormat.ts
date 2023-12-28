export default class ContentFormat {
    static validateContent(content: string, min: number, max: number): string {
        if(!content) throw new Error('O conteúdo é obrigatório')
        if(content.length < min) throw new Error(`O conteúdo deve ter no mínimo ${min} caracteres`)
        if(content.length > max) throw new Error(`O conteúdo deve ter no máxima ${max} caracteres`)

        return content
    }
}