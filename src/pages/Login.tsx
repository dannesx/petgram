import { FormEvent, useState } from 'react'
import { Button, Input, Link } from '../components/utils'
import { User, Lock, SignIn } from '@phosphor-icons/react'
import login from '../controllers/login'

function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		const credentials = { username, password }

		const response = await login(credentials)
		console.log(response)
	}

	return (
		<section className="w-screen h-screen flex justify-center items-center">
			<div>
				<h1 className="mb-4 text-center">Petgram</h1>
				<form onSubmit={e => handleSubmit(e)}>
					<Input
						type="text"
						label="Usuário"
						IconEl={User}
						onChange={e => setUsername(e.target.value)}
					/>
					<Input
						type="password"
						label="Senha"
						IconEl={Lock}
						marginBottom
						onChange={e => setPassword(e.target.value)}
					/>
					<Button text="Entrar" IconEl={SignIn} marginBottom />
				</form>
				<Link path="/register" text="Crie uma nova conta" textAlign="center" />
			</div>
		</section>
	)
}
export default Login
