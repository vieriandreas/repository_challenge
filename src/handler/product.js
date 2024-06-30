class ProductHandler {
    constructor(ProductService) {
      this.ProductService = ProductService;
  
      this.getAll = this.getAll.bind(this);
      this.insert = this.insert.bind(this);
    }
  
  
    async getAll(req, res) {
      const serviceRes = await this.ProductService.getAll()
  
      res.status(serviceRes.statusCode).send({
        products: serviceRes.products
      })
    }

    async insert(req, res) {
        const payload = req.body;
        const serviceRes = await this.ProductService.insert(payload)
    
        res.status(serviceRes.statusCode).send({
          created_product: serviceRes.createdProduct
        })
      }
  }
  
  module.exports = ProductHandler;