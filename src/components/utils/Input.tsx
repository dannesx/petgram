import { Icon } from '@phosphor-icons/react'
import { ChangeEventHandler } from 'react'

interface Props {
	type: string
	label: string
	onChange: ChangeEventHandler<HTMLInputElement>
	IconEl?: Icon
	marginBottom?: boolean
	required?: boolean
}

function Input({
	type,
	label,
	onChange,
	IconEl,
	marginBottom,
	required,
}: Props) {
	return (
		<div className={`flex flex-col mb-4 ${marginBottom && 'mb-6'}`}>
			<div className="flex gap-1">
				{IconEl && <IconEl color="#30e3ca" weight="bold" />}
				<label htmlFor={label} className="text-primary mb-2 leading-none">
					{label}
				</label>
			</div>
			<input
				type={type}
				name={label}
				id={label}
				className="bg-transparent rounded outline-none ring-2 ring-primary text-primary px-3 py-1 leading-none focus:bg-primary-600/30 focus:ring-primary-600"
				required={required}
				onChange={onChange}
			/>
		</div>
	)
}
export default Input
