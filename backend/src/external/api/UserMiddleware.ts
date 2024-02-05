import { Request, Response } from 'express'
import { NextFunction } from 'express'
import JwtProvider from './JwtProvider'
import User from '../../core/user/model/User'
import UserRepository from '../../core/user/service/UserRepository'

export default function UserMiddleware(repository: UserRepository) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const unauthorized = () => res.status(403).send('Token inválido')

        const token = req.headers.authorization?.replace('Bearer ', '')

        if (!token) {
            unauthorized()
            return
        }

        const jwtProvider = new JwtProvider(process.env.JWT_SECRET!)

        try {
            const userToken = jwtProvider.get(token) as User
            const user = await repository.searchByEmail(userToken.email)

            if (!user) {
                unauthorized()
                return
            }

            (req as any).user = user
            next()
        } catch (err) {
            console.error(err)
            unauthorized()
        }
    }
}

