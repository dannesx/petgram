import { Input, Button, Link } from '../components/utils'
import { At, EnvelopeSimple, Lock } from '@phosphor-icons/react'

function Register() {
	return (
		<main className="w-screen h-screen flex justify-center items-center flex-col">
			<h1 className="mb-6 text-center">Cadastro</h1>
			<form method="post">
				<div className="flex gap-6 mb-4">
					<div>
						<Input type="text" label="Usuário" required IconEl={At}/>
						<Input type="email" label="Email" required IconEl={EnvelopeSimple}/>
					</div>
					<div>
						<Input type="password" label="Senha" required IconEl={Lock}/>
						<Input type="password" label="Confirme sua senha" required IconEl={Lock}/>
					</div>
				</div>

				<Button text="Criar conta" marginBottom />
				<Link path="/login" text="Já tem uma conta? faça login" textAlign='center'/>
			</form>
		</main>
	)
}
export default Register
