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

    async insert(product) {
        try {
            const createdProduct = await this.ProductRepository.insert(product)
            
            return { statusCode: 201,
                createdProduct: createdProduct
            }
        } catch (err) {
            console.log(err)
            return {
                statusCode: 500,
                createdPoduct: null

            }
        }
    }
       
}
  module.exports = ProductService;