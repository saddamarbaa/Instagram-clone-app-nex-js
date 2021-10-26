/** @format */

import React, { Fragment } from "react";
import Header from "../header/header";

const HomePageComponent: React.FunctionComponent = () => {
	return (
		<Fragment>
			<Header />
			<div className='bg-[#FAFAFA] w-full min-h-screen  py-5  '>
				<div className=' max-w-5xl mx-auto flex items-center justify-between px-4 '>
					{/* <div>first</div>
					<div> second</div> */}
				</div>
			</div>
		</Fragment>
	);
};

export default HomePageComponent;
