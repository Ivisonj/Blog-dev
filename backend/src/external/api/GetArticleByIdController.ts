import { Express } from "express"
import GetArticleById from "@/core/article/service/GetArticleById"

export default class GetArticleByIdController {
    constructor(
        readonly server: Express, 
        readonly useCase: GetArticleById, 
        ...middleware: any[]
    ) {
        server.get('/api/article/:id', ...middleware, async (req, res) => {
            try {
                const article = await useCase.execute({
                    articleId: (req.params as any).id 
                })
                res.status(200).send(article)
            } catch(error: any) {
                res.status(400).send(error.message)
            }
        })
    }
}