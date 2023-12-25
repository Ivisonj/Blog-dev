import jwt from "jsonwebtoken"

export default class JwtProvider {
    constructor(private secret: string) {}

    generate(data: string | object): string {
        return jwt.sign(data, this.secret, {
            expiresIn: '1d',
        })
    }

    get(token: string): string | object {
        return jwt.verify(token, this.secret)
    }
}