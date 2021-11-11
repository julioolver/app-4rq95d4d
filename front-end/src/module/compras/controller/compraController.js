import Compra from "../domain/model/Compra";
import http2 from "../../../plugins/axios2";


export default class CompraController {
  dialog = false;
  dialogDelete = false;
  loading = false;
  contextForm = null;
  purchaseForm = null;
  showSnack = false;
  snackData = {};

  headers = [
    {
      text: "ID",
      align: "start",
      value: "id",
    },
    { text: "Estoque", value: "quantity" },
    { text: "SKU", value: "sku" },
    { text: "Ações", value: "actions", sortable: false },
  ];

  items = [];
  purchases = [];
  editedIndex = -1;
  item = new Compra({});
  requiredRule = [
    v => !!v || 'Nome é obrigatório'
  ];

  constructor(context) {
    this.context = context;
  }
  async buscaDados() {
    try {
      this.loading = true;
      const request = await http2("purchase");
      this.purchases = request.data;
      const items = await http2("product");
      this.items = items.data;

    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  formTitle() {
    const title = this.item.id ? `Editar Compra - ${this.item.id}` : "Cadastrar Compra"
    return title;
  }

  initialize() {
    this.purchases = [];
    this.buscaDados();
  }

  editItem(item) {
    this.editedIndex = this.purchases.indexOf(item);
    console.log(this.editedIndex);
    this.item = new Compra(item);
    this.dialog = true;
  }

  deleteItem(item) {
    this.editedIndex = this.purchases.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }

  async deleteItemConfirm() {
    try {
      await http2.delete(`purchase/${this.editedItem.id}`);
      await this.buscaDados();
      this.closeDelete();
      this.showSnack = true;
      this.snackData = {
        text: 'Registro excluído com sucesso',
        color: 'green',
        timeout: 5000
      }
    } catch (error) {
      this.showSnack = true;
      this.snackData = {
        text: error,
        color: 'red',
        timeout: 5000
      }
    }
  }

  close() {
    this.dialog = false;
    this.context.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
    this.item = new Compra({});
  }

  closeDelete() {
    this.dialogDelete = false;
    this.controller.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }

  async save() {
    if (this.contextForm.$refs.purchaseForm.validate()) {
      if (this.editedIndex > -1) {
        Object.assign(this.purchases[this.editedIndex], this.item);
      } else {
        try {
          await http2.post('purchase', this.item);
          this.buscaDados();
        } catch (error) {
          console.log(error);
        }
      }
      this.close();
    }
  }
}
