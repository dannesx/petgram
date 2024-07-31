import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
	element: ReactNode
}

function ProtectedRoute({ element }: Props) {
	const token = localStorage.getItem('token')
  
	return token ? element : <Navigate to="/login" />
}

export default ProtectedRoute
