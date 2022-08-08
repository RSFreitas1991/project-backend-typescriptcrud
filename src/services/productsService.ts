import productsModel from '../models/productsModel';
import Product from '../interfaces/productInterface';

const productsService = {
  async getAll() {
    const list = await productsModel.getAll();
    return list;
  },
  async addProduct(product: Product) {
    const included = await productsModel.addProduct(product);
    return included;
  },
};

export default productsService;