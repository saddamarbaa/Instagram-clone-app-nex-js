/** @format */

import React from "react";

type UserType = {
	image?: string;
	width?: number;
	height?: number;
	color?: string;
};

const User: React.FunctionComponent<UserType> = ({
	color,
	image,
	width,
	height,
}) => {
	const finalColor = color ? "border-[#c13584]" : "";
	const divClasses = "rounded-full cursor-pointer border ";

	return (
		<img
			className={`${finalColor} ${divClasses}`}
			src={image}
			alt=''
			style={{
				height: height ? height : 50,
				width: width ? width : 50,
			}}
		/>
	);
};

export default User;
