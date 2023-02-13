export default function SubData({ subtitle, data }) {
	return (
		<div>
			<span>
				<b>{subtitle}:</b>
			</span>
			<span> {data}</span>
		</div>
	);
}