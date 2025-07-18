import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import PageUnderConstruction from './PageUnderConstruction'
import CategorySelector from './category.page'
import { ErrorPage } from './error.page'
import { HomePage } from './home-page'
import { Login } from './login-page'
import ProfilePage from './profile.page'
import { Signup } from './signup.page'
import { Signup2 } from './signup2.page'
import { Signup3 } from './signup3.page'
import { Signup4 } from './signup4.page'

export const PageRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={< Signup />} />
        <Route path="/signup/2" element={< Signup2 />} />
        <Route path="/signup/3" element={< Signup3 />} />
        <Route path="/signup/4" element={< Signup4 />} />
        <Route path="/login" element={< Login />} />
        <Route path="/category" element={< CategorySelector />} />
        <Route path="/forget-password" element={< PageUnderConstruction />} />
        <Route path="/profile" element={< ProfilePage />} />
        <Route path="/" element={< HomePage />} />
        <Route path="*" element={< ErrorPage />} />
      </Routes>
    </Router>
  )
}