import { v4 as uuid, validate } from 'uuid'

export default class Id {
    static generateHash(): string {
        return uuid()
    }
}
