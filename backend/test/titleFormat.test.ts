import TitleFormar from "@/core/shared/TitileFormat"

describe("TitleFormat", () => {
    describe("validateTitle", () => {
        it("should throw an error if title is empty", () => {
            expect(() => {
                TitleFormar.validateTitle('', 3, 30)
            }).toThrow('O título é obrigatório')
        })

        it("should throw an error if title is short", () => {
            expect(() => {
                TitleFormar.validateTitle('iv', 3, 30)
            }).toThrow('O título deve ter no mínimo 3 caracteres')
        })

        it("should throw an error if title is long", () => {
            expect(() => {
                TitleFormar.validateTitle('ivison', 3, 5)
            }).toThrow('O título deve ter no máxima 5 caracteres')
        })

        it("should return a title", () => {
            expect(TitleFormar.validateTitle('Ivison', 3, 30)).toBe('Ivison')
        })
    })
})