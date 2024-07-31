import axios from 'axios'
import Post from '../types/Post'

const BASE_URL = import.meta.env.VITE_BASE_URL

export default async function createPost(post: Post) {
	try {
		const userId = localStorage.getItem('userId') || ''
		const response = await axios.post(`${BASE_URL}/posts/${userId}`, post, {
			headers: {
				'Content-Type': 'application-json',
				'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
			},
		})

		return response
	} catch (error) {
		console.error(error)
		console.log(error.response.data)
	}
}
