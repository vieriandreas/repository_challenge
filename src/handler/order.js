class OrderHandler {
    constructor(OrderService) {
        this.OrderService = OrderService;

        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
    }

    async getAll(req, res) {
        const serviceRes = await this.OrderService.getAll()
    
        res.status(serviceRes.statusCode).send({
          orders: serviceRes.orders
        })
      }

    async create(req, res) {
        const payload = req.body;
        const serviceRes = await this.OrderService.create(payload)
    
        res.status(serviceRes.statusCode).send({
          created_order: serviceRes.createdOrder
        })
      }
}

module.exports = OrderHandler