import { Icon } from '@phosphor-icons/react'

interface Props {
	text: string
	IconEl?: Icon
	marginBottom?: boolean
}

function Button({ text, IconEl, marginBottom }: Props) {
	return (
		<button
			className={`bg-primary ring-2 ring-primary w-full p-2 rounded transition-colors hover:bg-primary-600 hover:ring-primary-600 outline-none focus:bg-primary-600 focus:ring-primary-600 ${
				marginBottom && 'mb-3'
			}`}
		>
			<div className="flex gap-1 justify-center">
				{IconEl && <IconEl color="#40514e" weight="bold" />}
				<span className="leading-none text-dark font-semibold">{text}</span>
			</div>
		</button>
	)
}
export default Button
