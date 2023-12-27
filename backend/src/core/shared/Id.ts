import { v4 as uuid, validate } from 'uuid'

export default class Id {
    static generateHash(): string {
        return uuid()
    }
}

// export default class Id {
//     constructor(readonly value: string = uuid()) {
//         if(!validate(value)) throw new Error('Id inválido')
//     }
// }