import { Heart } from '@phosphor-icons/react'
import { useState } from 'react'

function Likes() {
	const [liked, setLiked] = useState(false)

	function handleClick() {
		setLiked(prev => !prev)
	}
	return (
		<div
			className="flex gap-1 items-center cursor-pointer"
			onClick={handleClick}
		>
			<Heart color="#30E3CA" size={20} weight={liked ? 'fill' : 'regular'} />
			<span className="text-primary font-medium">329</span>
		</div>
	)
}

export default Likes
