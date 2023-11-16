'use server';

import React from 'react'
import {getContract} from "@/lib/utilities";
import data from '../SampleData';

export default async function Catalog() {

	const {Threads} = await getContract()

	try {
		const data = await Threads.getThreadsLength();
		const num = Number(data);
		console.log(num);
	} catch (e) {
		console.error(e);
	}

	try {
		const data = await Threads.getThreads(0, 10);
		data.forEach(thread => {
			console.log({
				content: thread.content,
				name: thread.name,
				id: thread.id,
				balance: thread.balance,
				creator: thread.creator,
				likes: thread.likes.toString(),
				dislikes: thread.dislikes.toString(),
				commentIds: JSON.stringify(thread.commentsIds)
			});
		});
	} catch (e) {
		console.error(e);
	}


	return (
		<>
			<div className="p-4 sm:ml-64 max-w-4xl">
				<div className="flex flex-col p-4 border-2 border-dashed rounded-lg border-gray-600">
					{data.map((thread, index) => (
						<div key={index} className=" p-4 pl-6 border-2 border-dashed border-gray-700 rounded-lg mb-4 h-52">
							<div className="flex flex-row justify-between">
								<div className="flex flex-col content-between">
									<h3 className="text-xl font-bold leading-8">{thread.name}</h3>
									<span
										className="break-words font-thin">{thread.description}</span>
									<div className="flex justify-left items-end flex-row w-full h-full">
										<div className="px-4 h-12 text-left p-2">
											Likes: {thread.likes.length}
										</div>
										<div className="px-4 h-12 text-left p-2">
											Dislikes: {thread.dislikes.length}
										</div>
										<div className="px-4 h-12 text-left p-2">
											Comments: {thread.commentsIds.length}
										</div>
									</div>
								</div>
								<div className="h-44 pl-6">
									<img
										className="h-44 object-center object-cover aspect-video  rounded-lg overflow-hidden"
										src=" https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg.jpg"/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
