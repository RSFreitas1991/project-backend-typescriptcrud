import productsModel from '../models/productsModel';

const productsService = {
  async getAll() {
    const list = await productsModel.getAll();
    return list;
  },
  async addProduct(product: any) {
    const included = await productsModel.addProduct(product);
    return included;
  },
};

export default productsService;