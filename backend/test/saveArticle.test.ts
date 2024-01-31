import Article from "@/core/article/model/Article"
import ArticleRepository from "@/core/article/service/ArticleRepository"
import SaveArticle from "@/core/article/service/SaveArticle"

describe("save article", () => {
    let articleRepositoryMock: jest.Mocked<ArticleRepository>
    let saveArticleMock: SaveArticle

    beforeEach(() => {
        articleRepositoryMock = {
            salve: jest.fn(),
            getAll: jest.fn(),
            getArticleById: jest.fn(),
            deleteArticle: jest.fn(), 
            getArticlesByUserId: jest.fn(), 
        } as jest.Mocked<ArticleRepository>
        saveArticleMock = new SaveArticle(articleRepositoryMock)
    })

    it("should save article", async () => {
        const article: Article = {
            title: 'Artigo Teste',
            description: 'Este artigo aborda...',
            imageUrl: '/link',
            category: 'web', 
            author: 'ivison',
            userId: '123',
            content: 'Artigo sobre testes automatizados'
        }
        
        await saveArticleMock.execute(article)

        expect(articleRepositoryMock.salve).toHaveBeenCalledWith({
            id: expect.any(String), 
            ...article
        })
    })
})