import GetUsers from "@/core/user/service/GetUsers";
import { Express } from "express"

export default class GetUsersController {
    constructor(
        server: Express, 
        useCase: GetUsers 
    ) {
        server.get('/api/user/users', async (req, res) => {
            try {
               const users = await useCase.execute()
               res.status(200).json(users)
            } catch(erro: any) {
                res.status(400).send(erro.message)
            }
        })
    }
} 