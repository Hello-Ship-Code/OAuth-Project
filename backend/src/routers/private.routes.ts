import { Router } from 'express'

import { getUserById } from '../controllers/user/getUserById.controller'
import { getUserCategoriesController } from '../controllers/user/getUserCategories.controller'
import { getUsersController } from '../controllers/user/getUsers.controller'
import { profileController } from '../controllers/user/profile.controller'
import { userCategoriesController } from '../controllers/user/userCategories.controller'

const privateRoutes = Router()

privateRoutes.get('/friends', getUsersController)
privateRoutes.post('/user-categories', userCategoriesController)
privateRoutes.get('/get-user-categories', getUserCategoriesController)
privateRoutes.get('/profile', profileController)
privateRoutes.get('/user', getUserById)

export { privateRoutes }
