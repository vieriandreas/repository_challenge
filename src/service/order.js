class OrderService {
    constructor(OrderRepository) {
        this.OrderRepository = OrderRepository;
    }

    async getAll() {
        try {
          const orderList = await this.OrderRepository.findAll()
    
          
    
          return {
            statusCode: 200,
            orders: orderList
          }
        } catch (err) {
          console.log(err);
          return {
            statusCode: 500,
            orders: []
          }
        }
      }

    async create(order) {
        try {
            const createdOrder = await this.OrderRepository.create(order)

            return {
                statusCode: 201,
                createdOrder: createdOrder
            }
        } catch (err) {
            console.log(err)
            return {
                statusCode: 500,
                createdOrder: null

            }
        }
    }

    async updateOrderStatus(payload, user_id) {
        try {
            const updateOrder = await this.OrderRepository.orderStatus(payload, user_id)

            return {
                statusCode: 201,
                updatedOrder: updateOrder
            }
        } catch (err) {
            console.log(err)
            return {
                statusCode: 500,
                updatedOrder: null

            }
        }
    }
}

module.exports = OrderService