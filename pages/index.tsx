/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import HomePageComponent from "../components/home-page/home-page";
import { Fragment } from "react";

const HomePage: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Instagram Clone app</title>
				<meta
					name='description'
					content='Instagram Clone build with React + Next Js + TypeScript.'
				/>
			</Head>

			<HomePageComponent />
		</Fragment>
	);
};

export default HomePage;
