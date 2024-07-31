import { Plus } from '@phosphor-icons/react'
import { Button, Input, TextArea } from '../components/utils'
import { FormEvent, useState } from 'react'
import createPost from '../controllers/createPost'

function NewPost() {
	const [imageUrl, setimageUrl] = useState('')
	const [caption, setCaption] = useState('')

	async function handleSubmit(e: FormEvent) {
		e.preventDefault()

		const post = { imageUrl, caption }
		const response = await createPost(post)
		console.log(response)
	}

	return (
		<section className="space-y-4">
			<h2>Nova publicação</h2>
			<form onSubmit={e => handleSubmit(e)}>
				<Input
					type="text"
					label="Caminho da imagem"
					onChange={e => setimageUrl(e.target.value)}
				/>
				<TextArea label="Legenda" onChange={e => setCaption(e.target.value)} />
				<Button text="Publicar" IconEl={Plus} />
			</form>
		</section>
	)
}
export default NewPost
