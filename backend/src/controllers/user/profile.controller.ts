import { RequestHandler } from 'express'

import { userProfile } from '../../logic/userprofile'

export const profileController: RequestHandler = async (_req, res, next) => {
  try {
    const user = res.locals.user

    if (!user) {
      res.status(409).json({ message: 'invalid token' })
      return
    }

    const userData = await userProfile(user)

    res.json({ message: userData })
  } catch (error) {
    next(error)
  }
}