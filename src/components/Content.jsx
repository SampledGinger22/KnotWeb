import React from 'react';
import '../style/Content.css'; // Uses FirstFocus styles if needed
import Perspective from './Perspective';
import FirstFocus from './FirstFocus';

const Content = () => {
	return (
		<div className="content-container">
			<FirstFocus />
			<Perspective />
		</div>
	);
};

export default Content;
