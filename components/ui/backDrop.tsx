/** @format */

import React, { useRef } from "react";

import { useAppDispatch } from "../../app/hooks";
import { setHideComposeState } from "../../features/sendPost/sendPostSlice";

type BackDropProps = {
	children: React.ReactNode;
};

const BackDrop: React.FC<BackDropProps> = (props) => {
	const dispatch = useAppDispatch();

	const closeCompose = () => {
		// dispatch(setHideComposeState());
	};

	return (
		<div
			onClick={closeCompose}
			style={{ background: "rgba(0, 0, 0, 0.75)" }}
			className='fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center  z-30 '>
			{props.children}
		</div>
	);
};

export default BackDrop;
