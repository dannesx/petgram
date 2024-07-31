import { PencilSimple, TrashSimple } from '@phosphor-icons/react'
import { Button } from '../components/utils'
import { useUser } from '../contexts/useUser'

function Profile() {
	const { user } = useUser()

	return (
		<section className="space-y-2">
			<h2>Perfil do Usuário</h2>
			<div className="flex gap-1 items-center">
				<h4>ID</h4>
				<span className="text-sm">{user.id}</span>
			</div>
			<div className="flex gap-1 items-center">
				<h4>Usuário</h4>
				<span className="text-sm">{user.username}</span>
			</div>
			<div className="flex gap-1 items-center">
				<h4>Email</h4>
				<span className="text-sm">{user.email}</span>
			</div>
			<div className="flex gap-1 items-center">
				<h4>Criado em</h4>
				<span className="text-sm">
					{new Date(user.createdAt).toLocaleDateString('pt-br')}
				</span>
			</div>
			<div className="flex gap-4">
				<Button text="Editar usuário" IconEl={PencilSimple} />
				<Button text="Apagar conta" IconEl={TrashSimple} />
			</div>
		</section>
	)
}
export default Profile
