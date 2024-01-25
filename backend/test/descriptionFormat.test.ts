import DescriptionFormar from "@/core/shared/DescriptionFormat"

describe("DescriptionFormat", () => {
    describe("validateDescription", () => {
        it("should throw an error if description is empty", () => {
            expect(() => {
                DescriptionFormar.validateDescription('', 3, 30)
            }).toThrow('A descrição é obrigatória')
        })

        it("should throw an error if description is short", () => {
            expect(() => {
                DescriptionFormar.validateDescription('iv', 3, 30)
            }).toThrow('A descrição deve ter no mínimo 3 caracteres')
        })

        it("should throw an error if description is long", () => {
            expect(() => {
                DescriptionFormar.validateDescription('ivison', 3, 5)
            }).toThrow('A descrição deve ter no máxima 5 caracteres')
        })

        it("should return a description", () => {
            expect(DescriptionFormar.validateDescription('Ivison', 3, 30)).toBe('Ivison')
        })
    })
})