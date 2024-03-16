import TodoModel from "../models/todo.model.js";
import BaseRepository from "./index.js";

class TodoRepository extends BaseRepository {
	constructor() {
		super(TodoModel);
	}

	async findAllTodos(userId) {
		try {
			return await this.model.findAll({ where: { userId: userId } });
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async findOne(data) {
		const { userId, id } = data;
		const todo = await this.model.findOne({
			where: { userId: userId, id: id },
		});
	}
}

export default TodoRepository;
