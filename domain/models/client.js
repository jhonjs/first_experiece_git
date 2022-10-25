export class Client {
    constructor (data) {
        this.clientId = data.clientId || 0,
        this.name = data.name || '',
        this.lastname = data.lastname || ''
    }
}