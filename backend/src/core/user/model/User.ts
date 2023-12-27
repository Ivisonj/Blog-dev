import EmailFormat from "@/core/shared/EmailFormat"
import Entity from "@/core/shared/Entity"
// import Entity from "@/core/shared/Entity"
import Id from "@/core/shared/Id"
import PasswordFormat from "@/core/shared/PasswordFormat"

export default interface User {
    id?: string
    name: string
    email: string
    password: string
}

// export default class User extends Entity {
//     readonly name: NameFormat
//     readonly email: EmailFormat
//     readonly password: PasswordFormat

//     constructor(props: UserProps) {
//         super(props.id!)
//         this.name = new NameFormat(props.name!, 3, 100)
//         this.email = new EmailFormat(props.email)
//         this.password = new PasswordFormat(props.password!, 3, 20)
//     }
// }

