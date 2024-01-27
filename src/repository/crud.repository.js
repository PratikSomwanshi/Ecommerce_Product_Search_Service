class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async createProduct(data) {
        const response = await this.model.create(data);
        return response;
    }

    async getProductByCategory({ category }) {
        let response;
        if (!category) {
            response = await this.model.find();
        } else {
            response = await this.model.find({
                category,
            });
        }
        return response;
    }

    async getProduct(id) {
        return await this.model.findById(id);
    }
}

module.exports = CrudRepository;
