import React from 'react'
import DirectoryItem from "../directory-item/directory-item"
import "./directory.styles.scss";
const DirectoryComponents = ({categories}) => {
  return (
		<div className="directory-container">
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</div>
	);
}

export default DirectoryComponents;