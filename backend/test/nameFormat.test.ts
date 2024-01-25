import NameFormat from "@/core/shared/NameFormat "

describe("NameFormat", () => {
    describe("validateName", () => {
        it("should throw an error if name is empty", () => {
            expect(() => {
                NameFormat.validateName('', 3, 30)
            }).toThrow('Nome é obrigatório')
        })

        it("should throw an error if name is short", () => {
            expect(() => {
                NameFormat.validateName('iv', 3, 30)
            }).toThrow('Nome deve ter no mínimo 3 caracteres')
        })

        it("should throw an error if name is long", () => {
            expect(() => {
                NameFormat.validateName('ivison', 3, 5)
            }).toThrow('Nome deve ter no máximo 5 caracteres')
        })

        it("should return a name", () => {
            expect(NameFormat.validateName('Ivison', 3, 30)).toBe('Ivison')
        })
    })
})