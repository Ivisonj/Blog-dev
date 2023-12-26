import UserLogin from "@/core/user/service/UserLogin"
import { Express } from "express"
import JwtProvider from "./JwtProvider"

export default class UserLoginController {
    constructor(
        readonly server: Express,
        readonly useCase: UserLogin
    ) {
        server.post('/api/user/login', async (req, res) => {
            try {
                const user = await useCase.execute({
                    email: req.body.email, 
                    password: req.body.password
                })

                const jwtProvider = new JwtProvider(process.env.JWT_SECRET)
                res.status(200).send(jwtProvider.generate(user))
            } catch(erro: any) {
                res.status(400).send(erro.message)
            }
        })
    }
}