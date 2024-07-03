import { Link } from './utils'

function Header() {
	return (
		<header className="p-4 flex justify-between">
			<a href="/">
				<img src="/Logo.svg" alt="Petgram Logo" className="max-w-40" />
			</a>

			<ul className="flex gap-6">
				<li>
					<Link text="Novo Post" path="/post/new" />
				</li>
				<li>
					<Link text="Perfil" path="/profile/1" />
				</li>

				<li>
					<Link text="Sair" path="/login" />
				</li>
			</ul>
		</header>
	)
}
export default Header
