import { Express } from "express"
import GetUserById from "../../core/user/service/GetUserById"

export default class GetUserByIdController {
    constructor(
        readonly server: Express, 
        readonly useCase: GetUserById, 
        ...middlewares: any[] 
    ) {
        server.get('/api/user/:id', ...middlewares, async (req, res) => {
            try {
                const user = await useCase.execute({
                    userId:  (req.params as any).id
                })
                res.status(200).send(user)
            } catch(error: any) {
                res.status(400).send(error.message)
            }
        })
    }
}