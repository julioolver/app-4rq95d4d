import http2 from "../../../plugins/axios2";
import Venda from "../domain/model/Venda";

export default class VendaController {
  dialog = false;
  dialogDelete = false;
  loading = false;
  contextForm = null;
  editedIndex = -1;
  saleForm = true;
  showSnack = false;
  snackData = {};

  headers = [
    {
      text: "ID",
      align: "start",
      value: "id",
    },
    { text: "Qunt. de venda", value: "quantity" },
    { text: "SKU/Produto", value: "sku" },
    { text: "Ações", value: "actions", sortable: false },
  ];

  sales = [];
  item = new Venda({});

  requiredRule = [
    v => !!v || 'Nome é obrigatório'
  ];

  constructor(context) {
    this.context = context;
  }

  async initialize() {
    try {
      this.loading = true;
      this.sales = [];
      await this.buscaDados();
    } catch (error) {
      this.showSnack = true;
      this.snackData = {
        text: error,
        color: 'red',
        timeout: 5000
      }
    } finally {
      this.loading = false;
    }
  }

  async buscaDados() {
    try {
      const request = await http2("sale");
      this.sales = request.data;
      const items = await http2("product");
      this.items = items.data;
    } catch (error) {
      this.showSnack = true;
      this.snackData = {
        text: error,
        color: 'red',
        timeout: 5000
      }
    }
  }

  formTitle() {
    const title = this.item.id ? `Editar Venda - ${this.item.id}` : "Cadastrar Venda"
    return title;
  }

  editItem(item) {
    this.editedIndex = this.sales.indexOf(item);
    console.log(this.editedIndex);
    this.item = new Venda(item);
    this.dialog = true;
  }

  deleteItem(item) {
    this.editedIndex = this.sales.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.item = item;
    this.dialogDelete = true;
  }

  async deleteItemConfirm() {
    try {
      await http2.delete(`sale/${this.item.id}`);
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
    this.item = new Venda({});
  }

  closeDelete() {
    this.dialogDelete = false;
    this.context.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }

  async save() {
    if (this.contextForm.$refs.saleForm.validate()) {
      if (this.editedIndex > -1) {
        Object.assign(this.sales[this.editedIndex], this.item);
      } else {
        try {
          this.loading = true;
          await http2.post('sale', this.item);
          this.buscaDados();
          this.showSnack = true;
          this.snackData = {
            text: "Registro incluído com sucesso!",
            color: 'green',
            timeout: 5000
          }
          this.close();
        } catch (e) {
          const error = e.response.data.response;
          let errorMessage = 'Erro : ';

          Object.keys(error).forEach(e => {
            error[e].forEach(error => errorMessage += `${error}\n`)
          })

          this.showSnack = true;
          this.snackData = {
            text: errorMessage,
            color: 'red',
            timeout: 5000
          }
        } finally {
          this.loading = false;
        }
      }
    }
  }
}
