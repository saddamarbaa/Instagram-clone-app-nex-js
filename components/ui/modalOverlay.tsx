/** @format */

import { XCircleIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import { setHideComposeState } from "../../features/sendPost/sendPostSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";

import BackDrop from "./backDrop";
import db from "../../config/firebase";

type PostType = { post?: string };

export const ModalOverlay: React.FunctionComponent = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const [post, setPost] = useState<string>("");

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (!post || post.trim() === "") {
			return;
		} else {
			db.collection("posts")
				.add({
					postContent: post,
					postImage: "",
					postDate: firebase.firestore.FieldValue.serverTimestamp(),
					userName: user?.displayName,
					userImage: user?.photoURL || "/images/tem-img.png",
					timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				})
				.then((docRef) => {
					// console.log("Document written with ID: ", docRef.id);
				})
				.catch((error) => {
					// console.error("Error adding document: ", error);
				});

			closeCompose();
		}
	};

	const closeCompose = () => {
		dispatch(setHideComposeState());
	};

	const changeInputHandler = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		setPost(event.target.value);
	};

	return (
		<BackDrop>
			<div className='fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center z-40'>
				<div className='mx-auto mt-[3rem] mb-[3rem] round-[6px] bg-white flex  flex-col shadow-2xl w-[90%] max-w-[31rem] h-[25rem]'>
					<form
						autoComplete='off'
						onSubmit={handleSubmit}
						className=' w-full'>
						<div className='p-[1rem] w-full border-b border-[#dadde1] text-center relative'>
							<h2 className='text-[1.3rem] font-bold'>Create Post</h2>
							<div
								className=' absolute right-[20px] top-[20px]'
								onClick={closeCompose}>
								<XCircleIcon className='h-8 cursor-pointer text-blue-500' />
							</div>
						</div>

						<div className='mt-[1rem] flex flex-grow flex-col h-full'>
							<textarea
								onChange={changeInputHandler}
								autoFocus
								placeholder='Add post'
								className='outline  bottom-0 focus:outline-none text-gray-500 flex-grow p-[1rem]'
							/>
						</div>
						<div className='px-[1rem] pt-[1rem] '>
							<button
								type='submit'
								className='w-full bg-blue-500 text-white text-[1rem] rounded-md h-[2.7rem] font-bold hover:bg-blue-400  duration-150 transition'>
								Add Post
							</button>
						</div>
					</form>
				</div>
			</div>
		</BackDrop>
	);
};
