import axios from 'axios'
import router from '../Router'

const BASE_URL = import.meta.env.VITE_BASE_URL

type Credentials = {
	username: string
	password: string
}

export default async function login(credentials: Credentials) {
	try {
		const response = await axios.post(`${BASE_URL}/users/login`, credentials, {
			headers: {
				'Content-Type': 'application/json',
			},
		})

		localStorage.setItem('token', response.data.token)
		localStorage.setItem('userId', response.data.userId)

		router.navigate('/')
	} catch (error) {
		console.error(error)
		console.log(error.response.status, error.response.data)
	}
}
