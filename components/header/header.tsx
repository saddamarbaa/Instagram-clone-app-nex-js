/** @format */

import {
	HeartIcon,
	SearchIcon,
	ChatIcon,
	BellIcon,
	PlusCircleIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import Image from "next/image";

import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";

import {
	setShowComposeState,
	selectSendPost,
} from "../../features/sendPost/sendPostSlice";

import { getRandomIntNumberBetween } from "../../lib/api-util";
import { ModalOverlay } from "../ui/modalOverlay";

const Header: React.FunctionComponent = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const composeState = useAppSelector(selectSendPost);

	const showCompose = () => {
		dispatch(setShowComposeState());
	};

	return (
		<header className='sticky top-0 z-50 bg-white   py-4   border-b-2 border-gray-200 '>
			<div className=' max-w-5xl mx-auto flex items-center justify-between px-4 '>
				<div className=' hidden  md:flex  w-28 relative lg-flex items-center h-10 cursor-pointer my-auto'>
					<Image
						src='/images/logo.png'
						alt='Instagram logo'
						layout='fill'
						objectFit='contain'
						objectPosition='left'
					/>
				</div>

				<div className=' w-28 relative flex items-center h-10 cursor-pointer my-auto md:hidden'>
					<Image
						src='/images/sm-logo.png'
						alt='Instagram logo'
						layout='fill'
						objectFit='contain'
						objectPosition='left'
					/>
				</div>

				<div className='hidden lg:flex items-center border px-3 w-[300px]  py-2 bg-gray-100  rounded-[5px] '>
					<SearchIcon className='h-5 cursor-pointer' />
					<input
						type='text'
						placeholder='Search'
						className=' border-0 px-4 
						bg-transparent outline-none flex-grow
					text-gray-600 placeholder-gray-400'
					/>
				</div>
				<div className='flex items-center space-x-6'>
					<HomeIcon className='h-7 cursor-pointer  ' />
					<PlusCircleIcon
						className='h-7 cursor-pointer  '
						onClick={showCompose}
					/>

					<div className='relative'>
						<BellIcon className='h-7 cursor-pointer ' />

						<div className='absolute h-[1.4rem] w-[1.4rem] text-[12px] bg-[red] rounded-full flex items-center justify-center top-[-18px] left-[3px] text-[white]'>
							{getRandomIntNumberBetween(1, 10)}
						</div>
					</div>
					<ChatIcon className='h-7 cursor-pointer   ' />
					<HeartIcon className='h-7 cursor-pointer' />
					<div className='hidden lg:inline-flex'>
						<Image
							className='rounded-full cursor-pointer'
							src={
								user?.photoURL ? user?.photoURL : "/images/tem-img.png"
							}
							alt='Picture of the author'
							width={35}
							height={35}
							objectFit='cover'
						/>
					</div>
				</div>
			</div>

			{composeState && <ModalOverlay />}
		</header>
	);
};

export default Header;
