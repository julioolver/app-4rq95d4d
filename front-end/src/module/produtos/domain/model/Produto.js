export default class Produto {
    constructor({ id = null, name = null, quantity = null, sku = null }) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.sku = sku;
    }
}