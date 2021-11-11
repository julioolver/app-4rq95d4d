export default class Venda {
    constructor({ id = null, quantity = null, sku = null }) {
        this.id = id;
        this.quantity = quantity;
        this.sku = sku;
    }
}