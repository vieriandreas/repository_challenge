class UserService {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }

    async register(users) {
        const newRegister = await this.UserRepository.insert(users);
    
        return newRegister;
      }
}

module.exports = UserService;