import axios from 'axios'
import User from '../types/User'

const BASE_URL = import.meta.env.VITE_BASE_URL

export default async function register(user: User) {
	try {
		const response = await axios.post(`${BASE_URL}/users/register`, user, {
			headers: {
				'Content-Type': 'application/json',
			},
		})

		return response.data
	} catch (error) {
		console.error(error)
    
		if (error.response.status === 400) {
			alert('Usuário e/ou email já existem')
		}
	}
}
