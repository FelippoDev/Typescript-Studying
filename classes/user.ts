import { stringify } from "querystring"

export default class CUser {
    public username: string
    email: string
    private password: string
    private documentNumber: string | undefined


    constructor(username: string, email: string, password: string, public userId: string, documentNumber?: string){
        this.username = username
        this.email = email
        this.password = password
        this.documentNumber = documentNumber
        this.userId = userId
    }

}

class Customer extends CUser{
    public customerId: string
    constructor(customerId: string){
        super(super.username, this.email, this.password, this.userId)
        this.customerId = customerId
    }
}
