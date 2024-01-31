import Article from "@/core/article/model/Article"
import ArticleRepository from "@/core/article/service/ArticleRepository"
import DeleteArticle from "@/core/article/service/DeleteArticle"
import Erros from "@/core/shared/Erros"

describe("delete article", () => {
    let articleRepositoryMock: jest.Mocked<ArticleRepository>
    let deleteArticleMock: DeleteArticle

    beforeEach(() => {
        articleRepositoryMock = {
            salve: jest.fn(),
            searchById: jest.fn(),
            getAll: jest.fn(),
            getArticleById: jest.fn(),
            deleteArticle: jest.fn(), 
            getArticlesByUserId: jest.fn(), 
        } as jest.Mocked<ArticleRepository>
        deleteArticleMock = new DeleteArticle(articleRepositoryMock)
    })

    it("should delete article", async () => {
        const articleId = '123'
        const article: Article = {
                id: articleId,
                title: 'Artigo Teste',
                description: 'Este artigo aborda...',
                imageUrl: '/link',
                category: 'web',
                author: 'ivison', 
                userId: '123456',
                content: 'Artigo sobre testes automatizados'
        }
        articleRepositoryMock.getArticleById.mockReturnValue(Promise.resolve(article))

        await deleteArticleMock.execute({ articleId })

        expect(articleRepositoryMock.getArticleById).toHaveBeenCalledWith(articleId)
        expect(articleRepositoryMock.deleteArticle).toHaveBeenCalledWith(articleId)
    })

    it("should throw error if article does not exists", async () => {
        const articleId = '123'
        articleRepositoryMock.getArticleById.mockReturnValue(Promise.resolve(null))

        await expect(deleteArticleMock.execute({ articleId })).rejects.toThrow(Erros.ARTICLE_NOT_EXISTS)
    })
})