import { createContext, ReactNode, useEffect, useState } from 'react'
import User from '../types/User'
import getUserById from '../controllers/getUserById'

type Props = {
	children: ReactNode
}

type UserContextT = {
	user: User
}

export const UserContext = createContext({} as UserContextT)

export function UserProvider({ children }: Props) {
	const [user, setUser] = useState({} as User)
	useEffect(() => {
		async function fetchUser() {
			const result = await getUserById(localStorage.getItem('userId') || '')

			if (result) {
				setUser(result)
			}
		}

		fetchUser()
	}, [])

	return (
		<UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
	)
}
