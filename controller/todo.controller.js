import TodoService from "../service/todo.service.js";

export default class TodoController {
	constructor() {
		this.todoService = new TodoService();
	}

	getTodoByIdHandler = async (req, res) => {
		const todoId = req.params.id;
		const userId = req.user.id;

		try {
			const todo = await this.todoService.getTodoById(userId, todoId);

			if (!todo) {
				return res
					.status(404)
					.json({ error: true, message: `Todo with ${todoId} not found` });
			}

			res.json({
				error: false,
				message: null,
				data: todo,
			});
		} catch (error) {
			res.json({
				error: true,
				message: error.message,
				data: null,
			});
		}
	};

	getTodosHandler = async (req, res) => {
		try {
			const todos = await this.todoService.getTodos(req.user.id);
			res.json({
				error: false,
				data: todos,
				message: null,
			});
		} catch (error) {
			res.json({
				error: true,
				data: null,
				message: error.message,
			});
		}
	};

	createTodoHandler = async (req, res) => {
		try {
			const data = { ...req.body, userId: req.user.id };
			const savedtodo = await this.todoService.createTodo(data);
			res.status(201);
			res.json({ error: false, data: savedtodo, message: null });
		} catch (error) {
			res.json({ error: true, data: null, message: "Error creating new todo." });
		}
	};

	deleteTodoByIdHandler = async (req, res) => {
		const todoId = req.params.id;
		const userId = req.user.id;

		try {
			await this.todoService.deleteTodoById(userId, todoId);
			res.sendStatus(200);
		} catch (error) {
			res.json({
				error: true,
				data: null,
				message: error.message,
			});
		}
	};

	findTodosByUserId = async (req, res) => {
		return res.json(await this.todoService.findTodosByUserId(req.user.id));
	};

	findAllHandler = async (req, res) => {
		try {
			const todos = await this.todoService.findAll();
			res.json({
				error: false,
				message: null,
				data: todos,
			});
		} catch (error) {
			res.json({
				error: true,
				message: error.message,
				data: null,
			});
		}
	};

	findTodoByTodoIdHandler = async (req, res) => {
		try {
			const data = { id: req.params.id, userId: req.user.id };
			const todo = await this.todoService.findTodoByTodoId(data);

			if (!todo) {
				res.status(404);
				return res.json({
					error: true,
					data: todo,
					message: `Todo id:${data.id} not found`,
				});
			}

			res.json({ error: false, data: todo, message: null });
		} catch (error) {
			res.json({ error: true, data: null, message: error.message });
		}
	};

	deleteById = async (req, res) => {
		res.json(await this.todoService.deleteById(req.params.id));
	};
}
