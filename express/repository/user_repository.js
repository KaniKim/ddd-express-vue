const { User } = require("../models");
const { UserData } = require("../domain/user_data");

class UserRepository {
  insertUser = (user => {
    const user_data = UserData(user);
    User.create({
      user_name: user_data.user_name,
      email: user_data.email,
      password: user_data.password
    })
      .then(() => console.log("Data is Created"))
      .catch((err) => {
        console.error(err);
      });
  });
}

module.exports(UserRepository);
