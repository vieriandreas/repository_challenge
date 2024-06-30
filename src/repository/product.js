const { Users, Products, Orders } = require('../../models')

class ProductRepository {
  constructor() { }

  async findAll() {
    const productList = await Products.findAll(
      {
        attributes: [
          'picture',
          'variation',
          'price',
          'sold',
          'name',
          'shipping_cost',
          'assessment',
          'profile'
        ],
        include: [
          {
            model: Users,
            required: true,
            as: "user",
            attributes: [
              'email',
              'password']
          },
          {
            model: Orders,
            required: true,
            as: "order",
            attributes: [
              'addres',
              'option',
              'message',
              'quantity',
              'payment_method',
              'payment_details',
              'confirmation']
          }
        ]
      }
    );

    return productList;
  }
}

module.exports = ProductRepository;