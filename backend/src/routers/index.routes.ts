import type { Response, Express } from 'express'

import { privateRoutes } from './private.routes'
import { publicRouters } from './public.routes'
import { authMiddleware } from '../middlewares/auth'

const appRouter = (app: Express) => {
  app.use('/profile', authMiddleware, privateRoutes)
  app.use('/api', publicRouters)
  app.use((_, response: Response) => {
    response.redirect('/')
  })
}

export { appRouter }