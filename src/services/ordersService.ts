import ordersModel from '../models/ordersMode';
/* import OrderList from '../interfaces/orderListInterface'; */

const ordersService = {
  async getAll() {
    const list = await ordersModel.getAll();
    const productsId = await ordersModel.getProductsOrderIdList();
    const result: any = [];
    for (let i = 0; i < productsId.length; i += 1) {
      if (!result.some((index: any) => index.orderId === productsId[i].orderId)) {
        const arrayTransform = {
          id: [productsId[i].id],
          orderId: productsId[i].orderId,
        };
        result.push(arrayTransform);
      } else {
        const place: number = result.findIndex((placeIndex: any) => placeIndex
          .orderId === productsId[i].orderId);
        result[place].id = [...result[place].id, productsId[i].id];
      }
    }
    const finalResult = await this.transform(list, result);
    return finalResult;
  },
  async transform(list: any, productsId: any) {
    const lista = list;
    for (let i = 0; i < lista.length; i += 1) {
      const place: number = productsId.findIndex(
        (placeIndex: any) => placeIndex.orderId === lista[i].id,
      );
      lista[i].productsIds = productsId[place].id;
    }
    return lista;
  },
};

export default ordersService;