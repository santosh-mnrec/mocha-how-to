  const db={
      where:({})=>{}
  }
  class FooService {
    getFoo(fooId) {
      return db.where({ id: fooId });
    }
  }
  module.exports.FooService=FooService;