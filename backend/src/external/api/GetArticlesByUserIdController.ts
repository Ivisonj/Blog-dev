import { Express } from "express"
import GetArticlesByUserId from "@/core/article/service/GetArticlesByUserId"

export default class GetArticlesByUserIdController {
    constructor(
        readonly server: Express, 
        readonly useCase: GetArticlesByUserId, 
        ...middleware: any[]
    ) {
        server.get('/api/my-articles/:id', ...middleware, async (req, res) => {
            try {
                const articles = await useCase.execute({
                    userId: (req.params as any).id 
                })
                res.status(200).send(articles)
            }catch(error: any) {
                res.status(400).send(error.message)
            }
        })
    }
}