import Article from "@/core/article/model/Article"
import ArticleRepository from "@/core/article/service/ArticleRepository"
import GetArticlesByUserId from "@/core/article/service/GetArticlesByUserId"
import Erros from "@/core/shared/Erros"

describe("get articles by userId", () => {
    let articleRepositoryMock: jest.Mocked<ArticleRepository>
    let getArticlesByUserIdMock: GetArticlesByUserId

    beforeEach(() => {
        articleRepositoryMock = {
            salve: jest.fn(),
            getAll: jest.fn(),
            getArticleById: jest.fn(),
            deleteArticle: jest.fn(), 
            getArticlesByUserId: jest.fn(), 
        } as jest.Mocked<ArticleRepository>
        getArticlesByUserIdMock = new GetArticlesByUserId(articleRepositoryMock)
    })

    it("should get articles by userId", async () => {
        const userId = '123'
        const articles: Article[] = [
            {
                id: '123',
                title: 'Artigo Teste',
                description: 'Este artigo aborda...',
                imageUrl: '/link',
                category: 'web', 
                userId: userId,
                content: 'Artigo sobre testes automatizados'
            }
        ]
        articleRepositoryMock.getArticlesByUserId.mockReturnValue(Promise.resolve(articles))
        const result = await getArticlesByUserIdMock.execute({ userId })
        expect(result).toEqual(articles)
    })

    it("should throw error if does not exists articles", async () => {
        const userId = '123'
        articleRepositoryMock.getArticlesByUserId.mockReturnValue(Promise.resolve(null))

        await expect(getArticlesByUserIdMock.execute({ userId })).rejects.toThrow(Erros.THERE_IS_NOT_REGISTED_ARTICLES)
    })
})