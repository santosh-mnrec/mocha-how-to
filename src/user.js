const axios = require("axios");
class User {
  greet(noun) {
    return `Hello ${noun}`;
  }
  greetMessage(who) {
    let msg = this.greet(who);
    return msg;
  }
  async getUserDateById(id) {
    const result = await axios({
      method: "GET",
      url: "http://jsonplaceholder.typicode.com/todos/1",
    });
    return result.data.data;
  }
}
const user = new User();
module.exports = { user };
