import { useContext } from 'react'
import { UserContext } from './User'

export function useUser() {
	const context = useContext(UserContext)

	return context
}
