import { Express } from "express"
import SaveArticle from "@/core/article/service/SaveArticle"

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
                    description: req.body.description,
                    imageUrl: req.body.imageUrl,
                    category: req.body.category,
                    author: req.body.author,
                    userId: req.body.userId, 
                    content: req.body.content  
                })
                res.status(200).send('Artigo salvo com sucesso!')
            } catch(erro: any) {
                res.status(400).send(erro.message)
            }
        })
    }
}