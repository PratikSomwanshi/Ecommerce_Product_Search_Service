const CrudRepository = require("./crud.repository");
const { Product } = require("../model");

class ProductRepository extends CrudRepository {
    constructor() {
        super(Product);
    }
}

module.exports = ProductRepository;
