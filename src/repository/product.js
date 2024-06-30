const { Users, products, Orders } = require('../../models')

class ProductRepository {
  constructor() { }

  async findAll() {
    const productList = await products.findAll(
     
    );

    return productList;
  }

  async insert(product) {
    const createdProduct = await products.create({
      picture: product.picture,
      variation: product.variation,
      price: product.price,
      sold: product.sold,
      name: product.name,
      shipping_cost: product.shipping_cost,
      assessment: product.assessment,
      profile: product.profile
    });
    console.log(createdProduct)
    return createdProduct;
  }
}

module.exports = ProductRepository;