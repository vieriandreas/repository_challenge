const { orders } = require('../../models')

class OrderRepository {
    constructor() { }

    async findAll() {
        const orderList = await orders.findAll(

        );

        return orderList;
    }

    async create(order) {
        const createdOrder = await orders.create({
            user_id: order.user_id,
            product_id: order.product_id,
            shipping_status: order.shipping_status,
            addres: order.addres,
            option: order.option,
            message: order.message,
            quantity: order.quantity,
            payment_method: order.payment_method,
            payment_details: order.payment_details,
            confirmation: order.confirmation
        });
        console.log(createdOrder)
        return createdOrder;
    }

    async orderStatus (payload, user_id) {
        const updatedOrder = await orders.update(
            {shipping_status: payload.shipping_status},
            {
                where: {
                  user_id: user_id,
                }
              }
        )

        return updatedOrder
    }

}

module.exports = OrderRepository