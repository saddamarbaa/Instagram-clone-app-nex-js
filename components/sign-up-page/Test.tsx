/** @format */

import Image from "next/image";
import { auth, provider } from "../../config/firebase";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

import SignUpScreen from "../../pages/sign-up";

type FormValues = {
	email: string;
	password: string;
};

const LogInPageComponent: React.FunctionComponent = (props) => {
	const router = useRouter();

	const [signIn, setSignIn] = useState<boolean>(false);

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string | number>("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		// if (!errors.email && !errors.password) {
		// 	auth
		// 		.signInWithEmailAndPassword(data.email, data.password)
		// 		.then((signInedUser) => {
		// 			// signIn successful.
		// 			// console.log(signInedUser);
		// 			router.push("/");
		// 		})
		// 		.catch((error) => {
		// 			// An error happened.
		// 			// const errorCode = error.code;
		// 			const errorMessage = error.message;
		// 			alert(errorMessage);
		// 		});

		// Rest Inputs
		setPassword("");
		setEmail("");
		console.log(data);
		// }
	};

	return (
		<div className='flex flex-col items-center overflow-hidden mx-auto  bg-[#f0f2f5] w-full min-h-screen pb-[3rem]'>
			<div
				className='customCrad  h-[410px]  mt-[3rem]'
				style={{
					background: "white",
					boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.2)",
				}}>
				<div className='w-[175px] relative  mx-auto h-[50px] cursor-pointer mt-[2rem]'>
					<Image
						src='/images/logo.png'
						alt='Instagram logo'
						layout='fill'
						objectFit='cover'
						objectPosition='left'
					/>
				</div>

				<form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
					<div className='control'>
						<label htmlFor='email'></label>
						{errors.email && <p className='error'>Enter valid email </p>}

						<input
							className='input'
							type='text'
							id={errors ? "error" : "email"}
							placeholder='Email'
							required
							{...register("email", {
								required: true,
								pattern:
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							})}
							value={email}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setEmail(event.target.value);
							}}
						/>
					</div>

					<div className='control'>
						<label htmlFor='password'></label>
						<input
							className='input'
							type='password'
							id='password'
							required
							placeholder='Password'
							minLength={6}
							{...register("password", { required: true })}
							value={password}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setPassword(event.target.value);
							}}
						/>
					</div>
					<div className='control'>
						<button className='actions cursor-pointer w-full max-w-[260px] font-bold bg-[#1877f2] border border-[#1877f2]  tex-[1rem] transition duration-200 p-2 hover:bg-blue-400 text-white hover:border-blue-500'>
							Log In
						</button>

						<p className='control mt-[2rem] border-b text-gray-500 font-bold  w-full max-w-[260px] mx-auto '>
							Or
						</p>
					</div>
				</form>
				<div className='control cursor-pointer flex justify-center items-center  mt-[2rem] '>
					<div className='cursor-pointer justify-center flex items-center space-x-3 w-full max-w-[260px] '>
						<Image
							src='/images/google.png'
							alt='Google Logo'
							width={25}
							height={25}
							objectFit='contain'
							className='cursor-pointer'
						/>

						<p className='font-bold text-blue-500'>Log in with Google </p>
					</div>
				</div>
			</div>

			<div
				className='customCrad mt-[1.2rem] p-[1.5rem] text-[1.1rem] text-center text-gray-500'
				style={{
					background: "white",
					boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.2)",
				}}>
				Don't have an account?
				<span className='text-blue-500 ml-2 cursor-pointer font-bold '>
					Sign up
				</span>
			</div>

			<div className=' mt-[1.2rem] p-[1.5rem] text-[1.1rem] text-center text-gray-500'>
				Get the app.
			</div>
			<div className=' w-full max-w-[300px]  flex items-center justify-between'>
				<Image
					src='/images/app1.png'
					alt='Google Logo'
					width={134}
					height={40}
					objectFit='contain'
					className='cursor-pointer'
				/>
				<Image
					src='/images/app2.png'
					alt='Google Logo'
					width={134}
					height={40}
					objectFit='contain'
					className='cursor-pointer ml-4"'
				/>
			</div>

			<div className='text-gray-500 text-[15px] mt-[2.2rem] flex space-x-4  hidden md:flex '>
				<p className='cursor-pointer '> About</p>
				<p className='cursor-pointer '>Blog</p>
				<p className='cursor-pointer '>Jobs</p>
				<p className='cursor-pointer '>Help</p>
				<p className='cursor-pointer '>API</p>
				<p className='cursor-pointer '>Privacy</p>
				<p className='cursor-pointer '>Terms</p>
				<p className='cursor-pointer '>Top Accounts</p>
				<p className='cursor-pointer '>Hashtags</p>
				<p className='cursor-pointer '>Locations</p>
				<p className='cursor-pointer '>Instagram Lite</p>
			</div>
			<div className='text-gray-500 text-[15px] mt-[2.2rem]  hidden md:flex space-x-4'>
				<p className='cursor-pointer '>English</p>
				<p className='cursor-pointer '>© 2021 Instagram from Facebook</p>
			</div>
		</div>
	);
};

export default LogInPageComponent;
