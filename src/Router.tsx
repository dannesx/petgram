import { createBrowserRouter } from 'react-router-dom'
import {
	Home,
	Login,
	NewPost,
	PostPage,
	Profile,
	Register,
	Root,
} from './pages'
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter([
	{
		path: '/',
		element: <ProtectedRoute element={<Root />} />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'post/:id',
				element: <PostPage />,
			},
			{
				path: 'post/new',
				element: <NewPost />,
			},
			{
				path: 'profile/:id',
				element: <Profile />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
])

export default router
