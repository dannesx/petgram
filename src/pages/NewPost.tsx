import { Plus } from '@phosphor-icons/react'
import { Button, Input, TextArea } from '../components/utils'

function NewPost() {
	return (
		<section className="space-y-4">
			<h2>Nova publicação</h2>
			<form>
				<Input type="text" label="Caminho da imagem" />
				<TextArea label="Legenda" />
				<Button text="Publicar" IconEl={Plus} />
			</form>
		</section>
	)
}
export default NewPost
