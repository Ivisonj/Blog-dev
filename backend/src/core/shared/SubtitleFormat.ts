export default class SubtitleFormar {
    static(subtitle: string, min: number, max: number): string {
        if(!subtitle) throw new Error('Campo obrigatório')
        if(subtitle.length < min) throw new Error(`O subtitulo deve ter no mínimo ${min} caracteres`)
        if(subtitle.length > max) throw new Error(`O subtitulo deve ter no máxima ${max} caracteres`)

        return subtitle
    }
}