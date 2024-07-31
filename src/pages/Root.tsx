import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { UserProvider } from '../contexts/User'

function Root() {
	return (
		<div className="max-w-screen-lg mx-auto">
			<UserProvider>
				<Header />
				<Outlet />
				<Footer />
			</UserProvider>
		</div>
	)
}
export default Root
