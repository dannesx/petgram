export default interface Post {
	imageUrl: string
	caption: string
	comments?: []
	likes?: number
	createdAt?: string
	updatedAt?: string
}
