import { v4 as uuid } from "uuid"

export default class Id {
    static generateHash(): string {
        return uuid()
    }
}