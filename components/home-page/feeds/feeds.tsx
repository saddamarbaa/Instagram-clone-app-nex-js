import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/outline'
import FlipMove from 'react-flip-move'

import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { selectUser } from '../../../features/user/userSlice'
import User from '../../profile/profile'
import { fakeStoryies } from '../../../lib/api-util'
import Post from './post'
import db from '../../../config/firebase'
import DynamicPost from './dynamic-post'

const Feeds: React.FunctionComponent = () => {
	const user = useAppSelector(selectUser)

	const [post, setPost] = useState<any>([])

	useEffect(() => {
		const unsubscribe = db
			.collection('posts')
			.orderBy('timestamp', 'desc')
			.limit(3)
			.onSnapshot((snapshot) => {
				setPost(
					snapshot.docs.map((doc) => {
						return {
							data: doc.data(),
							id: doc.id,
						}
					}),
				)
			})

		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<div className="flex-auto  lg:mr-8 relative overflow-x-hidden">
			<div className="w-[2.5rem] h-[2.5rem] hidden lg:flex items-center justify-center bg-white  shadow-2xl z-40 rounded-full absolute top-[2rem] right-[33px] cursor-pointer">
				<ArrowRightIcon className="h-5 cursor-pointer  text-gray-500 " />
			</div>
			<div className="bg-white shadow-sm flex space-x-4 max-w-[616px] overflow-hidden py-6 border  rounded-[5px]  pl-4">
				<div>
					<User image={user?.photoURL} width={60} height={60} />
					<p className="text-[12px] pl-2 mt-1">{user?.displayName} </p>
				</div>
				<div>
					<User image="/images/saddam2.jpg" width={60} height={60} />
					<p className="text-[12px] pl-2 mt-1">Code.Saddam </p>
				</div>
				<div>
					<User image="/friends/susan.jpg" width={60} height={60} />
					<p className="text-[12px] pl-2 mt-1">CEO.YouTube </p>
				</div>
				<div>
					<User
						image="/friends/Sundar_pichai.png.webp"
						width={60}
						height={60}
					/>
					<p className="text-[12px] pl-2 mt-1">CEO.Google </p>
				</div>
				<div>
					<User image="/images/profile.jpg" width={60} height={60} />
					<p className="text-[12px] pl-2 mt-1">Saddam.Arbaa </p>
				</div>
				<div>
					<User image="/friends/mark.jpg" width={60} height={60} />
					<p className="text-[12px] pl-2 mt-1"> CEO.Meta </p>
				</div>

				{fakeStoryies &&
					fakeStoryies?.map((user, index) => {
						return (
							<div key={user?.id}>
								<User image={`/friends/${index}.jpg`} width={60} height={60} />
								<p className="text-[12px] pl-2 mt-1">{user?.name} </p>
							</div>
						)
					})}
			</div>

			{/* @ts-ignore */}
			<FlipMove>
				{post?.map((props: any) => {
					return (
						<DynamicPost
							key={props?.id}
							userImage={props?.data?.userImage}
							postDate={new Date(props?.data.timestamp?.toDate()).toUTCString()}
							userName={props?.data?.userName}
							postContent={props?.data?.postContent}
							postImage={props?.data?.postImage}
						/>
					)
				})}
			</FlipMove>

			<Post
				postContent="a utility first CSS framework. "
				postImage="/posts-image/taolwind.webp"
				userImage="/posts-image/index.jpg"
				postDate="3 days ago"
				userName="Emma Solve"
			/>

			<Post
				postContent="React Native is an open-source UI software framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities."
				postImage="/posts-image/react-native.jpg"
				userImage="/images/saddam2.jpg"
				postDate="5 hours ago"
				userName="Saddam Arbaa"
			/>

			<Post
				postContent="Hell Meta"
				postImage="/posts-image/mark2.jpg"
				userImage="/posts-image/markw.jpg "
				postDate="5 hours ago"
				userName="Mark Zuckerberg"
			/>

			<Post
				postContent=""
				postImage="/images/saddam2.jpg"
				userImage="/images/sadam.jpg"
				postDate="5 hours ago"
				userName="Saddam Arbaa"
			/>

			<Post
				postContent=""
				postImage="/images/sadam.jpg"
				userImage="/images/saddam2.jpg"
				postDate="20 hours ago"
				userName="Saddam Arbaa"
			/>

			<Post
				postContent="TypeScript is a strongly typed programming language that builds on JavaScript"
				postImage="/posts-image/typescript.jpeg"
				userImage="/images/sadam.jpg"
				postDate="2 hours ago"
				userName="Saddam Arbaa"
			/>

			<Post
				postContent="Next.js is an open-source development framework built on top of
				Node.js enabling React based web applications functionalities such
				as server-side rendering and generating static websites"
				postImage="/posts-image/nextjs1.png"
				userImage="/friends/saddam.jpg"
				postDate="11 hours ago"
				userName="saddam.dev"
			/>

			<Post
				postContent="JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled and multi-paradigm"
				postImage="/posts-image/javascript.png"
				userImage="/images/sadam.jpg"
				postDate="20 hours ago"
				userName="Saddam Arbaa"
			/>
		</div>
	)
}

export default Feeds
