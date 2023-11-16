import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
	content: string;
};

const BlogPost: React.FC<Props> = ({content}) => {
	return (
		<ReactMarkdown
			components={{
				h1: ({ node, ...props }) => <h1 className="mb-4 mt-6 text-gray-400 text-4xl font-bold" {...props} />,
				h2: ({ node, ...props }) => <h2 className="mb-3 mt-6 text-gray-400 text-3xl" {...props} />,
				h3: ({ node, ...props }) => <h3 className="mb-2 mt-6 text-gray-400 text-2xl" {...props} />,
				p: ({ node, ...props }) => <p className="mb-2 text-gray-600 text-xl leading-6" {...props} />,
				ul: ({ node, ...props }) => <ul className="mb-3 list-disc pl-5" {...props} />,
				ol: ({ node, ...props }) => <ol className="mb-3 list-decimal pl-5" {...props} />,
				li: ({ node, ...props }) => <li className="mb-1" {...props} />,
				a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
			}}
		>
			{content}
		</ReactMarkdown>
	);
};

export default BlogPost;
