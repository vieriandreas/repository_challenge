class UserHandler {
    constructor(UserService) {
        this.UserService = UserService

        this.register = this.register.bind(this);
    }

    

    async register(req, res) {
        const user = req.body
        const newUser = await this.UserService.register(user);
    
        let statusCode = 201;
        let respons = "created"
    
    
        if (newUser === null) {
          statusCode = 400;
          respons = "gagal"
        }
    
        res.status(statusCode).send({
          msg: respons
        })  
      
      }
}

module.exports = UserHandler;