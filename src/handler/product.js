class ProductHandler {
    constructor(ProductService) {
      this.ProductService = ProductService;
  
      this.getAll = this.getAll.bind(this);
    }
  
  
    async getAll(req, res) {
      const serviceRes = await this.ProductService.getAll()
  
      res.status(serviceRes.statusCode).send({
        products: serviceRes.products
      })
    }
  }
  
  module.exports = ProductHandler;