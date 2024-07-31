import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

export default async function getUserById(id: string) {
	try {
		const response = await axios.get(`${BASE_URL}/users/${id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
			},
		})

		return response.data
	} catch (error) {
		console.error(error)
		console.log(error.response.data)
	}
}
