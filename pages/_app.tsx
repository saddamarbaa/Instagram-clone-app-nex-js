/** @format */

import { store } from "../app/store";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import React, { useState } from "react";
import ProgressBar from "@badrap/bar-of-progress";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

import LogInScreen from "./login";
import Loading from "../components/ui/loading";

const progress = new ProgressBar({
	// The size (height) of the progress bar.
	// Numeric values get converted to px.
	size: 3,

	// Color of the progress bar.
	// Also used for the glow around the bar.
	color: "rgb(193,53,132)",

	// Class name used for the progress bar element.
	className: "bar-of-progress",

	// How many milliseconds to wait before the progress bar
	// animation starts after calling .start().
	delay: 80,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
	const [user, loading] = useAuthState(auth);

	return (
		<React.Fragment>
			<Provider store={store}>
				<Head>
					<title>Facebook Clone app</title>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1'
					/>
					<meta name='author' content='Saddam Arbaa' />
					<meta
						name='description'
						content='Instagram Clone build with React + Next Js + TypeScript'
					/>
				</Head>

				{loading && <Loading />}

				<Component {...pageProps} />
			</Provider>
		</React.Fragment>
	);
}

export default MyApp;
