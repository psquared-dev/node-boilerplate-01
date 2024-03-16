export default class BaseRepository {
	constructor(model) {
		this.model = model;
	}

	async create(data) {
		try {
			return await this.model.create(data);
		} catch (error) {
			throw new Error(`Failed to create ${this.model.name}`);
		}
	}

	async findById(id) {
		try {
			return await this.model.findByPk(id);
		} catch (error) {
			throw new Error(`Failed to find ${this.model.name} by ${id}`);
		}
	}

	async findAll() {
		try {
			return await this.model.findAll();
		} catch (error) {
			throw new Error(`Failed to find ${this.model.name}`);
		}
	}

	async deleteById(id) {
		try {
			return await this.model.destroy({
				where: { id },
			});
		} catch (error) {
			throw new Error(`Failed to find ${this.model.name}`);
		}
	}
}
