import { Router } from 'express'

import { categoriesController } from '../controllers/categories/category.controller'
import { getCategoriesController } from '../controllers/categories/getCategories.controller'
import { loginController } from '../controllers/user/login.controller'
import { signupController } from '../controllers/user/signup.controller'

const publicRouters = Router()

publicRouters.post('/signup', signupController)
publicRouters.post('/login', loginController)
publicRouters.post('/categories', categoriesController)
publicRouters.get('/get-categories', getCategoriesController)

export { publicRouters }