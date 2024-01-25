import PasswordFormat from "@/core/shared/PasswordFormat"

describe("PasswordFormat", () => {
    describe("validatePassword", () => {
        it("should throw an error if password is empty", () => {
            expect(() => {
                PasswordFormat.validatePassword('', 3, 30)
            }).toThrow('A senha é obrigatória')
        })

        it("should throw an error if password is short", () => {
            expect(() => {
                PasswordFormat.validatePassword('12', 3, 30)
            }).toThrow('A senha deve ter no mínimo 3 caracteres')
        })

        it("should throw an error if password is long", () => {
            expect(() => {
                PasswordFormat.validatePassword('123456', 3, 5)
            }).toThrow('A senha deve ter no máximo 5 caracteres')
        })

        it("should return a password", () => {
            expect(PasswordFormat.validatePassword('123456', 3, 30)).toBe('123456')
        })
    })
})