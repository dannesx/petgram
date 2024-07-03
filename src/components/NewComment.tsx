import { ChatCircleText } from '@phosphor-icons/react'
import { Button, TextArea } from './utils'

function NewComment() {
	return (
		<form>
			<TextArea label='Novo comentário'/>
      <Button text="Comentar" IconEl={ChatCircleText}/>
		</form>
	)
}
export default NewComment
