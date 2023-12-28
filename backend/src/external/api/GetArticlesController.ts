import GetArticles from "@/core/article/service/GetArticles";
import { Express } from "express"

export default class GetArticlesController {
    constructor(
        readonly server: Express, 
        readonly useCase: GetArticles, 
        ...middlewares: any[] 
    ) {
        server.get('/api/articles', ...middlewares, async (req, res) => {
            try {
                const articles = await useCase.execute()
                res.status(200).json(articles)
            } catch(erro: any) {
                res.status(400).send(erro.message)
            }
        })
    }
}