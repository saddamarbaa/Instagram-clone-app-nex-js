/** @format */

import Image from "next/image";
import { auth, provider } from "../../config/firebase";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import LogInScreen from "../../pages/login";

type UserSubmitForm = {
	fullname: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	acceptTerms: boolean;
};

const SignUpPageComponent: React.FC = () => {
	const autoScrollToBottomRef = useRef<HTMLDivElement>(null);
	const [logIn, setLogIn] = useState<boolean>(false);
	const router = useRouter();

	const validationSchema = Yup.object().shape({
		fullname: Yup.string().required("Fullname is required"),
		username: Yup.string()
			.required("Username is required")
			.min(6, "Username must be at least 6 characters")
			.max(20, "Username must not exceed 20 characters"),
		email: Yup.string()
			.required("Email is required")
			.email("Email is invalid"),
		password: Yup.string()
			.required("Password is required")
			.min(6, "Password must be at least 6 characters")
			.max(40, "Password must not exceed 40 characters"),
		confirmPassword: Yup.string()
			.required("Confirm Password is required")
			.oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
		acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<UserSubmitForm>({
		resolver: yupResolver(validationSchema),
	});

	// Auto Scroll functionality
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		// Auto Scroll functionality
		autoScrollToBottomRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, []);

	useEffect(() => {
		if (logIn) {
			return <LogInScreen />;
		}
	}, [setLogIn]);

	if (logIn) {
		return <LogInScreen />;
	}

	const onSubmit = (data: UserSubmitForm) => {
		// console.log(JSON.stringify(data, null, 2));

		auth
			.createUserWithEmailAndPassword(data.email, data.password)
			.then((registeredUser) => {
				registeredUser?.user?.updateProfile({
					displayName: data.username,
					photoURL: "/images/tem-img.png",
				});

				router.push("/");
			})
			.catch((error) => {
				// An error happened.
				// const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};

	const signInWithGoogleHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		auth
			.signInWithPopup(provider)
			.then((signInedUser) => {
				// signIn successful.
				// console.log(signInedUser);
				router.push("/");
			})
			.catch((error) => {
				// An error happened.
				// console.log(error);
			});
	};

	return (
		<React.Fragment>
			{/* Empty div for auto scroll */}
			<div
				ref={autoScrollToBottomRef}
				style={{
					paddingTop: "17rem",
					position: "absolute",
					top: "-100px",
				}}
				className='auto-scroll'></div>
			<div className='flex flex-col items-center overflow-hidden mx-auto  bg-[#f0f2f5] w-full min-h-screen pb-[3rem]'>
				<div
					className='customCrad  min-h-[650px]  mt-[3rem] pb-[2.5rem] '
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

					<div className='control'>
						<p className=' text-gray-500 font-bold text-[1rem]  w-full max-w-[260px] mx-auto '>
							Sign up to see photos and videos from your friends.
						</p>
					</div>

					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='control'>
							<label htmlFor='fullName'></label>
							<div className='error'>{errors.fullname?.message}</div>

							<input
								placeholder={errors.fullname ? "" : "Full Name"}
								type='text'
								{...register("fullname")}
								className={` ${
									errors.fullname ? "is-invalid" : "custom-input"
								}`}
							/>
						</div>

						<div className='control'>
							<label htmlFor='username'></label>
							<div className='error'>{errors.username?.message}</div>
							<input
								id='username'
								className={` ${
									errors.username ? "is-invalid" : "custom-input"
								}`}
								type='text'
								placeholder={errors.username ? "" : "Username"}
								{...register("username")}
							/>
						</div>

						<div className='control'>
							<label htmlFor='email'></label>
							<div className='error'>{errors.email?.message}</div>
							<input
								id='email'
								className={` ${
									errors.username ? "is-invalid" : "custom-input"
								}`}
								type='text'
								placeholder={errors.email ? "" : "Email"}
								{...register("email")}
							/>
						</div>

						<div className='control'>
							<label htmlFor='password'></label>
							<div className='error'>{errors.password?.message}</div>
							<input
								id='password'
								className={` ${
									errors.username ? "is-invalid" : "custom-input"
								}`}
								type='password'
								placeholder={errors.password ? "" : "Password"}
								{...register("password")}
							/>
						</div>

						<div className='control'>
							<label htmlFor='confirmPassword'></label>
							<div className='error'>
								{errors.confirmPassword?.message}
							</div>
							<input
								id='confirmPassword'
								className={` ${
									errors.username ? "is-invalid" : "custom-input"
								}`}
								type='password'
								placeholder={errors.password ? "" : "Confirm Password"}
								{...register("confirmPassword")}
							/>
						</div>

						<div className='control'>
							<div className='error'>{errors.acceptTerms?.message}</div>
							<div className=' text-gray-500 text-[14px]  w-full max-w-[260px] mx-auto flex '>
								<div className='mr-2'>
									<label htmlFor='acceptTerms'></label>

									<input
										id='checkbox'
										type='checkbox'
										{...register("acceptTerms")}
									/>
								</div>

								<p>
									By signing up, you agree to our{" "}
									<span className='font-bold'>
										{" "}
										Terms , Data Policy{" "}
									</span>
									and
									<span className='font-bold'> Cookies Policy .</span>
								</p>
							</div>
						</div>

						<div className='control'>
							<button type='submit' className='custom-button-v1'>
								Sign up
							</button>

							<div className='control'>
								<button
									className='custom-button-v1 modified-button'
									type='button'
									onClick={() => reset()}>
									Reset
								</button>
							</div>

							<p className='control mt-[2rem] border-b text-gray-500 font-bold  w-full max-w-[260px] mx-auto '>
								Or
							</p>
						</div>
					</form>

					<div className='control cursor-pointer flex justify-center items-center  mt-[2rem] '>
						<div className='cursor-pointer justify-center flex items-center space-x-3 w-full max-w-[260px] '>
							<Image
								onClick={signInWithGoogleHandler}
								src='/images/google.png'
								alt='Google Logo'
								width={25}
								height={25}
								objectFit='contain'
								className='cursor-pointer'
							/>

							<p
								onClick={signInWithGoogleHandler}
								className='font-bold text-blue-500'>
								Log in with Google{" "}
							</p>
						</div>
					</div>
				</div>

				<div
					className='customCrad mt-[1.2rem] p-[1.5rem] text-[1.1rem] text-center text-gray-500'
					style={{
						background: "white",
						boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.2)",
					}}>
					Already have an account?
					<span
						onClick={() => setLogIn(true)}
						className='text-blue-500 cursor-pointer ml-2 font-bold '>
						Log in
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
		</React.Fragment>
	);
};
export default SignUpPageComponent;
