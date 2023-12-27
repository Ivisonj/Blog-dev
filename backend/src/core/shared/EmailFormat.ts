export default class EmailFormat {
    static validateEmail(email: string): string {
        if(!email) throw new Error('O E-mail é obrigatório')
        if(email !== email.toLowerCase()) throw new Error('O E-mail só deve ter letras minúsculas')
        let format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!format.test(String(email).toLowerCase())) throw new Error('Formato de E-mail inválido')

        return email
    }
}