class ProductService {
    constructor(ProductRepository) {
      this.ProductRepository = ProductRepository;
    }
  
    async getAll() {
      try {
        const productList = await this.ProductRepository.findAll()
  
        
  
        return {
          statusCode: 200,
          products: productList
        }
      } catch (err) {
        console.log(err);
        return {
          statusCode: 500,
          products: []
        }
      }
    }
  }

  module.exports = ProductService;