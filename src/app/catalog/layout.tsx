'use server';

import React from 'react';
import Sidebar from "@/components/shared/sidebar/Sidebar";

type props = { children: React.ReactNode };

const CatalogLayout = async ({children}: props) => {
		return (
			<>
				<Sidebar/>
				{children}
			</>
		);
	}
;

export default CatalogLayout;