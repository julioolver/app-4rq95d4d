import Produto from "../domain/model/Produto";
import http2 from "../../../plugins/axios2";

export default class ProdutoController {
  dialog = false;
  dialogDelete = false;
  loading = false;
  editedIndex = -1;
  contextForm = null;
  productForm = false;
  showSnack = false;

  snackData = {};

  headers = [
    {
      text: "Nome",
      align: "start",
      sortable: false,
      value: "name",
    },
    { text: "Estoque", value: "quantity" },
    { text: "SKU", value: "sku" },
    { text: "Actions", value: "actions", sortable: false },
  ];
  products = [];
  item = new Produto({});

  requiredRule = [
    v => !!v || 'Campo obrigatório'
  ];

  constructor(context) {
    this.context = context;
  }

  async buscaDados() {
    try {
      const request = await http2("product");
      this.products = request.data;
    } catch (error) {
      console.log(error);
    }
  }

  formTitle() {
    const title = this.item.id ? `Editar Venda - ${this.item.id}` : "Cadastrar Venda"
    return title;
  }

  async initialize() {
    try {
      this.loading = true;
      this.products = [];
      await this.buscaDados();
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  // async mounted() {
  //   try {
  //     this.loading = true;
  //     this.buscaDados();
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     this.loading = false;
  //   }
  // }

  editItem(item) {
    this.editedIndex = this.products.indexOf(item);
    console.log(this.editedIndex);
    this.item = new Produto(item);
    this.dialog = true;
  }

  deleteItem(item) {
    this.editedIndex = this.products.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }

  deleteItemConfirm() {
    this.products.splice(this.editedIndex, 1);
    this.closeDelete();
  }

  close() {
    this.dialog = false;
    this.context.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
    this.item = new Produto({});
  }

  closeDelete() {
    this.dialogDelete = false;
    this.context.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }

  async save() {
    if (this.contextForm.$refs.productForm.validate()) {
      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.item);
        this.close();
      } else {
        try {
          this.loading = true;
          await http2.post('product', this.item);
          this.buscaDados();
          this.close();

          this.showSnack = true;
          this.snackData = {
            text: "Registro incluído com sucesso!",
            color: 'green',
            timeout: 5000
          }
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
