export default class Compra {
    constructor({ id = null, quantity = null, sku = null }) {
        this.id = id;
        this.quantity = quantity;
        this.sku = sku;
    }
}