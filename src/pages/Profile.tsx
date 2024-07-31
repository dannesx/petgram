import { PencilSimple, TrashSimple } from '@phosphor-icons/react'
import { Button } from '../components/utils'

function Profile() {
	return (
		<section className="space-y-2">
			<h2>Perfil do Usuário</h2>
			<div className="flex gap-1 items-center">
				<h4>ID</h4>
				<span className="text-sm">2342ff23232d2d</span>
			</div>
			<div className="flex gap-1 items-center">
				<h4>Usuário</h4>
				<span className="text-sm">dannesx</span>
			</div>
			<div className="flex gap-1 items-center">
				<h4>Email</h4>
				<span className="text-sm">daniel@email.com</span>
			</div>
			<div className="flex gap-1 items-center">
				<h4>Criado em</h4>
				<span className="text-sm">30/07/24</span>
			</div>
			<div className='flex gap-4'>
				<Button text="Editar usuário" IconEl={PencilSimple} />
				<Button text="Apagar conta" IconEl={TrashSimple} />
			</div>
		</section>
	)
}
export default Profile
