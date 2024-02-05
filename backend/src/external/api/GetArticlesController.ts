import { Express } from "express"
import GetArticles from "../../core/article/service/GetArticles"

export default class GetArticlesController {
    constructor(
        readonly server: Express, 
        readonly useCase: GetArticles, 
    ) {
        server.get('/api/articles', async (req, res) => {
            try {
                const articles = await useCase.execute()
                res.status(200).json(articles)
            } catch(erro: any) {
                res.status(400).send(erro.message)
            }
        })
    }
}