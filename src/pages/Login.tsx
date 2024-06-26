import { Button, Input, Link } from '../components/utils'
import { User, Lock, SignIn } from '@phosphor-icons/react'

function Login() {
	return (
		<main className="w-screen h-screen flex justify-center items-center">
			<div>
				<h1 className="mb-4 text-center">Petgram</h1>
				<Input type="text" label="Usuário" IconEl={User} />
				<Input type="password" label="Senha" IconEl={Lock} marginBottom />
				<Button text="Entrar" IconEl={SignIn} marginBottom />
				<Link path="/register" text="Crie uma nova conta" textAlign="center" />
			</div>
		</main>
	)
}
export default Login
