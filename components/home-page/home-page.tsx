/** @format */

import React, { Fragment } from "react";
import Header from "../header/header";
import Feeds from "./feeds/feeds";
import Suggestions from "./Suggestions/suggestions";

const HomePageComponent: React.FunctionComponent = () => {
	return (
		<Fragment>
			<Header />
			<div className='bg-[#FAFAFA] w-full min-h-screen  py-5  overflow-hidden '>
				<div className=' max-w-5xl mx-auto flex  justify-between px-4  items-stretch  '>
					<Feeds />
					<Suggestions />
				</div>
			</div>
		</Fragment>
	);
};

export default HomePageComponent;
