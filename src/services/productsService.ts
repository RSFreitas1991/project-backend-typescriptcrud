import productsModel from '../models/productsModel';

const productsService = {
  async getAll() {
    const list = await productsModel.getAll();
    return list;
  },
};

export default productsService;