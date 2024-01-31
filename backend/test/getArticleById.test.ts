import ArticleRepository from "@/core/article/service/ArticleRepository"
import GetArticleById from "@/core/article/service/GetArticleById"
import Article from "@/core/article/model/Article"
import Erros from "@/core/shared/Erros"

describe("get article by id", () => {
    let articleRepositoryMock: jest.Mocked<ArticleRepository>
    let getArticleByIdMock: GetArticleById

    beforeEach(() => {
        articleRepositoryMock = {
            salve: jest.fn(),
            getAll: jest.fn(),
            getArticleById: jest.fn(),
            deleteArticle: jest.fn(), 
            getArticlesByUserId: jest.fn(), 
        } as jest.Mocked<ArticleRepository>
        getArticleByIdMock = new GetArticleById(articleRepositoryMock)
    })

    it("shound get an article by id", async () => {
        const articleId = '123'
        const article: Article = {
                id: articleId,
                title: 'Artigo Teste',
                description: 'Este artigo aborda...',
                imageUrl: '/link',
                category: 'web', 
                author: 'ivison',
                userId: '123',
                content: 'Artigo sobre testes automatizados'
        }

        articleRepositoryMock.getArticleById.mockReturnValue(Promise.resolve(article))

        const result = await getArticleByIdMock.execute({ articleId })

        expect(articleRepositoryMock.getArticleById).toHaveBeenCalledWith(articleId)
        expect(result).toEqual(article)
    })

    it("should throw an error if article does not exists", async () => {
        const articleId = '123'
        articleRepositoryMock.getArticleById.mockReturnValue(Promise.resolve(null))

        await expect(getArticleByIdMock.execute({ articleId })).rejects.toThrow(Erros.ARTICLE_NOT_EXISTS)
    })
})