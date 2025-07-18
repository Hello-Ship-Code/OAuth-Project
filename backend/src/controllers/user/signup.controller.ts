import type { NextFunction, Request, RequestHandler, Response } from 'express'

import { findUserByEmail } from '../../lib/user/findUserByEmail'
import { userSignup } from '../../logic/registerUser'
import { userValidation } from '../../validation/user/user-validation'

import { UserSignupPayload } from '../../types/auth.types'

export const signupController: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userData: UserSignupPayload = userValidation.parse(req.body)

    const existingUser = await findUserByEmail(`${userData.email}`)

    if (existingUser) {
      res.status(409).json({ message: '😬 user already exists' })
      return
    }

    const user = await userSignup(userData)

    res.status(200).json({
      message: 'user signup successfully 🎉',
      user,
    })
  } catch (error) {
    next(error)
  }
}
