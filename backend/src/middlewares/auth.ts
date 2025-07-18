import { RequestHandler } from 'express'

import { getUser } from '../lib/JWT/JWT-auth'

export const authMiddleware: RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    const headerToken =
      authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null

    if (!headerToken) {
      res.status(401).json({
        message: 'Authentication token not found',
      })
      return
    }

    const user = getUser(headerToken)
    if (!user) {
      res.status(403).json({
        message: 'Invalid or expired token',
      })
      return
    }

    res.locals.user = user
    next()
  } catch (error) {
    next(error)
  }
}
