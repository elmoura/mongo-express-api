const request = require('supertest')
const mongoose = require('mongoose')
const { app } = require("../src/app")

describe('app flow tests', () => {
  const defaultTask = {
    name: 'task teste',
    description: 'testando integração de tasks'
  }

  test('should create and list to dos', async () => {
    const createTaskResult = await request(app).post('/tasks').send(defaultTask)

    expect(createTaskResult.status).toBe(201)
    expect(createTaskResult.body.name).toBe(defaultTask.name)
    expect(createTaskResult.body.description).toBe(defaultTask.description)

    const listTasksResult = await request(app).get('/tasks')

    expect(listTasksResult.status).toBe(200)
    expect(listTasksResult.body[0]._id).toBeTruthy()
    expect(listTasksResult.body[0].name).toBeTruthy()
    expect(listTasksResult.body[0].createdAt).toBeTruthy()
    expect(listTasksResult.body[0].updatedAt).toBeTruthy()
  })

  afterAll(async () => mongoose.connection.close())
})