type Props = {
	value: boolean;
	onToggle: () => void;
}

export function ToggleTaskCheckbox({
	onToggle, value }: Props) {
	return (
		<label>
			<input type="checkbox" checked={value} onChange={onToggle} />
			done
		</label>
	);
}