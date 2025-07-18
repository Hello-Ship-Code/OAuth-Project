import { findUserByEmail } from '../lib/user/findUserByEmail'
import { verifyPassword } from '../lib/user/hashPassword'

import { UserLoginPayload } from '../types/auth.types'

export const userLogin = async (userData: UserLoginPayload) => {
  const user = await findUserByEmail(`${userData.email}`, {
    id: true,
    email: true,
    userName: true,
    fullName: true,
    password: true,
  })

  if (!user || !(await verifyPassword(userData.password, user.password))) {
    return null
  }

  const { password, ...safeUser } = user
  return safeUser
}
