import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Welcome to OAuth Project</h1>
        <p className="text-lg text-neutral-600">Your identity. Your control. Your network.</p>
        <p className="text-sm text-neutral-400 max-w-md mx-auto">
          Start your journey by logging in or creating an account. Manage your preferences, track progress,
          and connect with others.
        </p>

        <div className="mt-8 space-y-4 w-full max-w-xs mx-auto">
          <Link to="/login">
            <button className="w-full py-3 rounded-2xl text-white bg-primary hover:bg-opacity-90 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full py-3 rounded-2xl border border-primary text-primary hover:bg-primary hover:text-white transition">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
