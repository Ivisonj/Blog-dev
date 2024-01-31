import ArticleRepository from "@/core/article/service/ArticleRepository"
import GetArticles from "@/core/article/service/GetArticles"
import Article from "@/core/article/model/Article"
import Erros from "@/core/shared/Erros"

describe("get articles", () => {
    let articleRepositoryMock: jest.Mocked<ArticleRepository>
    let getArticlesMock: GetArticles

    beforeEach(() => {
        articleRepositoryMock = {
            salve: jest.fn(),
            getAll: jest.fn(),
            getArticleById: jest.fn(),
            deleteArticle: jest.fn(), 
            getArticlesByUserId: jest.fn(), 
        } as jest.Mocked<ArticleRepository>
        getArticlesMock = new GetArticles(articleRepositoryMock)
    })

    it("shound get all articles", async () => {
        const articles: Article[] = [
            {
                id: '123',
                title: 'Artigo Teste',
                description: 'Este artigo aborda...',
                imageUrl: '/link',
                category: 'web', 
                author: 'ivison',
                userId: '123',
                content: 'Artigo sobre testes automatizados'
            }
        ]
        articleRepositoryMock.getAll.mockReturnValue(Promise.resolve(articles))

        const result = await getArticlesMock.execute()
        expect(result).toEqual(articles)
        expect(articleRepositoryMock.getAll).toHaveBeenCalled()
    })

    it("should throw an error if there aren't articles exists", async () => {
        articleRepositoryMock.getAll.mockReturnValue(Promise.resolve(null))

        expect(getArticlesMock.execute()).rejects.toThrow(Erros.ARTICLE_NOT_EXISTS)
    })
})