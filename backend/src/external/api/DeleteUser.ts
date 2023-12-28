import { Express } from "express"
import DeleUser from "@/core/user/service/DeleteUser"

export default class DeleteUserController {
    constructor(
        readonly server: Express, 
        readonly useCase: DeleUser, 
        ...middlewares: any[] 
    ) {
        server.delete('/api/user/delete/:id', ...middlewares, async (req, res) => {
            try {
                const user = useCase.execute({
                    userId:  (req.params as any).id
                })
                res.status(200).send(user)
            } catch(error) {
                res.status(400).send()
            }
        })
    }
}