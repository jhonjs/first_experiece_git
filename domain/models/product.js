export class Product {
    constructor ({data}) {
        this.productId = data.productId || 0,
        this.nameProduct = data.nameProduct || '',
        this.price = data.price || ''
    }
}