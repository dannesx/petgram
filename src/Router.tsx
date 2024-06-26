import { createBrowserRouter } from 'react-router-dom'
import { Home, Login, Post, Profile, Register } from './pages'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/post/:id',
		element: <Post />,
	},
	{
		path: '/profile/:id',
		element: <Profile />,
	},
])

export default router