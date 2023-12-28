import Article from "@/core/article/model/Article";
import SaveArticle from "@/core/article/service/SaveArticle";
import { Express } from "express"

export default class SalveArticleController {
    constructor(
       readonly server: Express, 
       readonly useCase: SaveArticle, 
       ...middlewares: any[] 
    ) {
        server.post('/api/article/salve', ...middlewares, async (req, res) => {
            try {
                await useCase.execute({
                    title: req.body.title, 
                    subtitle: req.body.subtitle,
                    userId: req.body.userId, 
                    content: req.body.content  
                })
                res.status(200).send()
            } catch(erro: any) {
                res.status(400).send(erro.message)
            }
        })
    }
}