import type { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

export const errorMiddleware = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ZodError) {
    const formattedErrors = err.errors.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }))

    res.status(400).json({
      error: 'Validation error',
      details: formattedErrors,
    })
    return
  }

  const status = err.statusCode || 500
  const message = err.message || 'Something went wrong'

  res.status(status).json({ error: message })
}
