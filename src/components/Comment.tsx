type Props = {
	username: string
	text: string
}

function Comment({ username, text }: Props) {
	return (
		<div className="space-x-1">
			<span className="text-primary text-sm">{username}</span>
			<span className="text-sm">{text}</span>
		</div>
	)
}

export default Comment
