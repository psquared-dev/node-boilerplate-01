import TodoModel from "../models/todo.model.js";

export default class TodoService {
	constructor() {
		// this.todoRepository = new TodoRepository();
	}

	async getTodoById(userId, todoId) {
		return await TodoModel.findOne({ where: { userId: userId, id: todoId } });
	}

	async deleteTodoById(userId, todoId) {
		return await TodoModel.destroy({ where: { userId: userId, id: todoId } });
	}

	async getTodos(userId) {
		return await TodoModel.findAll({ where: { userId: userId } });
	}

	async createTodo(data) {
		return await TodoModel.create(data);
	}
}
