/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
	setLogInState,
	setLogOutState,
	selectUser,
} from "../features/user/userSlice";
import { auth } from "../config/firebase";

import HomePageComponent from "../components/home-page/home-page";
import LogInScreen from "./login";
import Loading from "../components/ui/loading";

const HomePage: NextPage = () => {
	const user = useAppSelector(selectUser); // grab the user from global state
	const dispatch = useAppDispatch();

	// keep user login In
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
			if (authenticatedUser) {
				// User is signed in / The User was Logged in,
				// dispatch an action and change the state(save user in the global store)

				dispatch(
					setLogInState({
						displayName: authenticatedUser?.displayName || "",
						uid: authenticatedUser?.uid || "",
						email: authenticatedUser?.email || "",
						photoURL:
							authenticatedUser?.photoURL || "/images/tem-img.png",
					}),
				);
				// console.log("authenticated is User object", authenticatedUser);
			} else {
				// User is signed out
				// dispatch an action and change the state(remove a user from  the global store)
				dispatch(setLogOutState());
			}
		});

		return () => {
			unsubscribe();
		};
	}, [dispatch]);

	if (!user) {
		return <LogInScreen />;
	}

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
