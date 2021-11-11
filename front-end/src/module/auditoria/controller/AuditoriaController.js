import http2 from "../../../plugins/axios2";


export default class AuditoriaController {

  headers = [
    {
      text: "ID",
      align: "start",
      value: "id",
    },
    { text: "Tela", value: "form" },
    { text: "Produto/SKU", value: "sku" },
    { text: "Quant. Movimentado", value: "info" },
    { text: "data/hora", value: "date_time" },
  ];

  items = [];
  audits = [];
  constructor(context) {
    this.context = context;
  }
  async buscaDados() {
    try {
      this.loading = true;
      const request = await http2("audit");
      this.audits = request.data
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  initialize() {
    this.purchases = [];
    this.buscaDados();
  }
}
