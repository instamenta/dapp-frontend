'use server';

import Sidebar from '@/components/shared/sidebar/Sidebar';
import React from 'react';

type props = { children: React.ReactNode };

const ThreadDetailsLayout = async ({children}: props) => {
	return (
		<div>
			<>
				<Sidebar/>
				{children}
			</>
		</div>
	);
};

export default ThreadDetailsLayout;