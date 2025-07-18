import cors from 'cors'
import express from 'express'

import { env } from './config/environment'
import { errorMiddleware } from './middlewares/error'

import { appRouter } from './routers/index.routes'

const app = express()

app.use(cors())

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

appRouter(app)

// global error handler
app.use(errorMiddleware)

// Server
app.listen(env.PORT, () => console.log(`Server is running on port ${env.PORT}`))