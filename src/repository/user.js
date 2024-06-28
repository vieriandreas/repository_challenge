const {users} = require ('../../models');

class UserRepository {
    constructor() { }
  

async insert(user) {
    const createdusers = await users.create({
      email: user.email,
      password: user.password
    });

    return createdusers;
  }
}

module.exports = UserRepository;