import { Express } from "express"
import DeleteArticle from "@/core/article/service/DeleteArticle"

export default class DeleteArticleController {
    constructor(
        readonly server: Express, 
        readonly useCase: DeleteArticle, 
        ...middleware: any[]
    ) {
        server.delete('/api/article/delete/:id', ...middleware, async (req, res) => {
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