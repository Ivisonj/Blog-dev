import ContentFormat from "@/core/shared/ContentFormat"

describe("ContentFormat", () => {
    describe("validateContent", () => {
        it("should throw an error if content is empty", () => {
            expect(() => {
                ContentFormat.validateContent('', 3, 30)
            }).toThrow('O conteúdo é obrigatório')
        })

        it("should throw an error if content is short", () => {
            expect(() => {
                ContentFormat.validateContent('iv', 3, 30)
            }).toThrow('O conteúdo deve ter no mínimo 3 caracteres')
        })

        it("should throw an error if content is long", () => {
            expect(() => {
                ContentFormat.validateContent('ivison', 3, 5)
            }).toThrow('O conteúdo deve ter no máxima 5 caracteres')
        })

        it("should return a content", () => {
            expect(ContentFormat.validateContent('Ivison', 3, 30)).toBe('Ivison')
        })
    })
})