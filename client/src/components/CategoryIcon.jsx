import { myIcons } from "../assets/CategoryIcons";

function CategoryIcon({ category }) {
	let componentCategory = getCategory(category);

	function getCategory(category) {
		let categoryObj = myIcons.find((x) => x.name === category);

		return categoryObj;
	}

	return (
		<div
			id="category-icon"
			style={{
				backgroundColor: `${componentCategory?.backgroundColour}`,
			}}
			className=""
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill={"white"}
			>
				<path d={componentCategory?.path} />
			</svg>
		</div>
	);
}

export default CategoryIcon;
