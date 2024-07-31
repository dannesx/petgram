import { FormEvent, useState } from 'react'
import { Input, Button, Link } from '../components/utils'
import { At, EnvelopeSimple, Lock } from '@phosphor-icons/react'
import register from '../controllers/register'

function Register() {
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		if (password === confirmPassword) {
			const user = { username, password, email }
			const response = await register(user)

			console.log(response)
		} else {
			alert('Senhas diferentes. Por favor, confirme sua senha corretamente')
		}
	}

	return (
		<section className="w-screen h-screen flex justify-center items-center flex-col">
			<h1 className="mb-6 text-center">Cadastro</h1>
			<form onSubmit={event => handleSubmit(event)}>
				<div className="flex gap-6 mb-4">
					<div>
						<Input
							type="text"
							label="Usuário"
							required
							IconEl={At}
							onChange={e => setUsername(e.target.value)}
						/>
						<Input
							type="email"
							label="Email"
							required
							IconEl={EnvelopeSimple}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<Input
							type="password"
							label="Senha"
							required
							IconEl={Lock}
							onChange={e => setPassword(e.target.value)}
						/>
						<Input
							type="password"
							label="Confirme sua senha"
							required
							IconEl={Lock}
							onChange={e => setConfirmPassword(e.target.value)}
						/>
					</div>
				</div>

				<Button text="Criar conta" marginBottom />
				<Link
					path="/login"
					text="Já tem uma conta? faça login"
					textAlign="center"
				/>
			</form>
		</section>
	)
}
export default Register
