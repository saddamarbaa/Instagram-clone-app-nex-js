/** @format */

import React, { useRef } from "react";
import {
	DotsHorizontalIcon,
	HeartIcon,
	BookmarkIcon,
	MicrophoneIcon,
	PaperAirplaneIcon,
	EmojiHappyIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

import User from "../../profile/profile";
import { getRandomIntNumberBetween } from "../../../lib/api-util";

type PostType = {
	postContent?: string;
	postImage?: string;
	postDate?: string;
	userName?: string;
	userImage?: string;
};

const Post: React.FunctionComponent<PostType> = ({
	postContent,
	postImage,
	postDate,
	userName,
	userImage,
}) => {
	const commentRef = useRef<HTMLInputElement>(null!);

	const handleClick = (e: React.SyntheticEvent) => {
		e.preventDefault();
		commentRef.current.value = "";
	};

	return (
		<div className='mt-[1.5rem] bg-white shadow-sm   max-w-[616px] overflow-hidden py-4 border  rounded-[5px] '>
			<div className=' px-4 flex items-center space-x-4 justify-between  w-full'>
				<div className=' flex items-center  space-x-4 '>
					<User image={userImage} width={35} height={35} />
					<p className=' font-semibold text-[14px]'>{userName}</p>
				</div>
				<DotsHorizontalIcon className='h-6' />
			</div>
			{postImage && (
				<div className='relative w-full h-[350px] mt-5 lg:h-[600px]'>
					<Image
						src={postImage}
						alt='Post Image'
						layout='fill'
						objectFit='cover'
					/>
				</div>
			)}
			<div className='mt-4 px-4 flex items-center space-x-4 justify-between  w-full'>
				<div className=' flex items-center  space-x-4  cursor-pointer transition '>
					<HeartIcon className='customIcon' />
					<MicrophoneIcon className='customIcon' />
					<PaperAirplaneIcon className='customIcon' />
				</div>
				<BookmarkIcon className='customIcon  cursor-pointer' />
			</div>

			<div className='mt-2 px-4  w-full text-[13px] text-gray-500'>
				{getRandomIntNumberBetween(1230, 21345)} likes ❤️😃
			</div>

			<div className='mt-2 px-4  w-full text-[13px] text-gray-500'>
				{postContent}
			</div>

			<div className='mt-2 px-4  w-full text-[13px] text-gray-400'>
				{postDate}
			</div>

			<div className='mt-4 px-4  w-full text-[13px] text-gray-500 border-t py-2 '>
				<div className='flex items-center justify-between'>
					<div className='flex items-center justify-between space-x-5'>
						<EmojiHappyIcon className='h-6 cursor-pointer' />
						<form onSubmit={handleClick} className='flex flex-grow'>
							<input
								type='text'
								name=''
								id=''
								placeholder='Add comment'
								className='outline  bottom-0 focus:outline-none flex-grow'
								ref={commentRef}
							/>
						</form>
					</div>
					<p
						className='text-blue-500 font-semibold cursor-pointer'
						onClick={handleClick}>
						Post
					</p>
				</div>
			</div>
		</div>
	);
};

export default Post;
