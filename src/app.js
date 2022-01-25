require('dotenv/config')
require('express-async-errors')
require('./config/databaseConnection');
const express = require('express');
const mongoose = require('mongoose');
const { appRoutes } = require('./routes');

const app = express()

app.use(express.json())
app.use(appRoutes)

module.exports = { app }