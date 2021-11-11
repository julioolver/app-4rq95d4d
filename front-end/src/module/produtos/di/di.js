import ProdutoController from "../controller/produtoContorller";

const produtoController = (context) => new ProdutoController(context);

export {produtoController};