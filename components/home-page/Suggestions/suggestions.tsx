import React from 'react'
import Image from 'next/image'
import User from '../../profile/profile'

import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { selectUser, setLogOutState } from '../../../features/user/userSlice'
import { fakeUsers } from '../../../lib/api-util'

const Suggestions: React.FunctionComponent = () => {
	const dispatch = useAppDispatch()
	const user = useAppSelector(selectUser)

	const logOut = () => {
		dispatch(setLogOutState())
	}

	return (
		<div className="w-[340px]  min-h-full hidden lg:inline-flex ">
			<div className="fixed w-[340px]  ">
				<div className=" flex justify-between ">
					<div className="flex items-center space-x-5 mb-6">
						<Image
							className="rounded-full cursor-pointer"
							src={user?.photoURL ? user?.photoURL : '/images/tem-img.png'}
							alt="Image"
							width={66}
							height={66}
							objectFit="cover"
						/>
						<div>
							<p className=" font-semibold">{user?.displayName}</p>
							<p className="text-gray-500">Welcome to Instagram</p>
						</div>
					</div>
					<p
						onClick={logOut}
						className="text-blue-500 cursor-pointer mt-7 text-semibold">
						Sing Out!
					</p>
				</div>
				<div className="flex items-center justify-between ">
					<p className="text-gray-500 font-semibold  ">Suggestions For You</p>
					<p className="font-semibold">See All</p>
				</div>

				{fakeUsers &&
					fakeUsers?.map((user: any, index) => {
						return (
							<div
								key={user.id}
								className="mt-5 flex items-center space-x-4 justify-between">
								<div className=" flex items-center space-x-4 ">
									<User
										image={`/friends/${index}.jpg`}
										width={35}
										height={35}
									/>
									<div>
										<p className="font-semibold cursor-pointer hover:underline">
											{user?.name}
										</p>
										<p className="text-gray-500 mt-[-0.1rem] text-[12px]">
											{user?.address?.street}
										</p>
									</div>
								</div>
								<p className="text-blue-500 cursor-pointer">Follow</p>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default Suggestions
