import Post from '../components/Post'

function Home() {
	return (
		<section className='flex flex-col items-center space-y-8'>
			<Post />
			<Post />
			<Post />
		</section>
	)
}
export default Home
