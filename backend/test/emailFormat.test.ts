import EmailFormat from "@/core/shared/EmailFormat"

describe("EmailFormat", () => {
    describe("validateEmail", () => {
        it("should throw an error if email does not exist", () => {
            expect(() => {
                EmailFormat.validateEmail('')
            }).toThrow('O E-mail é obrigatório')
        })

        it("should throw an error if there are uppercase", () => {
            expect(() => {
                EmailFormat.validateEmail('Ivison@mail.com')
            }).toThrow('O E-mail só deve ter letras minúsculas')
        })

        it("should throw an error if there are not a email format", () => {
            expect(() => {
                EmailFormat.validateEmail('ivisonmail.com')
            }).toThrow('Formato de E-mail inválido')
        })

        it("should return an email", () => {
            expect(EmailFormat.validateEmail('ivison@mail.com')).toBe('ivison@mail.com')
        })
    })
})