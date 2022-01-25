const { Router } = require('express')
const { Task } = require('./common/models/Task')
const { createTaskController } = require('./usecases/tasks/createTask')

const appRoutes = Router()

appRoutes.post('/tasks', createTaskController.create)

// Criar useCases e Controllers para demais endpoints
appRoutes.get('/tasks', async (request, response) => {
  const tasks = await Task.find().limit(10)

  return response.json(tasks)
})

appRoutes.get('/tasks/:taskId', async (request, response) => {
  const { taskId } = request.params

  const task = await Task.findOne({ _id: taskId })

  return response.json(task)
})

module.exports = { appRoutes }