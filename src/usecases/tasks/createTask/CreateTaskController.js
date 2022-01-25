class CreateTaskController {
  constructor(createTaskUC) {
    this.useCase = createTaskUC

    this.create = this.create.bind(this)
  }

  async create(request, response) {
    const taskInput = request.body

    const result = await this.useCase.execute(taskInput)

    return response.status(201).json(result)
  }
}

module.exports = { CreateTaskController }