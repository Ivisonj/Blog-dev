import Article from "@/core/article/model/Article";
import SaveArticle from "@/core/article/service/SaveArticle";
import { Express } from "express"

export default class SalveArticleController {
    constructor(
       readonly server: Express, 
       readonly useCase: SaveArticle
    ) {
        server.post('/api/article/salve', async (req, res) => {
            try {
                await useCase.execute(
                    new Article({
                        ...req.body,
                    })
                )
                res.status(200).send()
            } catch(erro: any) {
                res.status(400).send(erro.message)
            }
        })
    }
}