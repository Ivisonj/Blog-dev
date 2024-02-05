import { Express } from "express"
import GetUsers from "../../core/user/service/GetUsers";

export default class GetUsersController {
    constructor(
        readonly server: Express, 
        readonly useCase: GetUsers,
        ...middlewares: any[] 
    ) {
        server.get('/api/users/', ...middlewares, async (req, res) => {
            try {
               const users = await useCase.execute()
               res.status(200).json(users)
            } catch(erro: any) {
                res.status(400).send(erro.message)
            }
        })
    }
} 