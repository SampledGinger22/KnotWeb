import React from 'react';
import '../style/Perspective.css';

const Perspective = () => {
	return (
		<div className="perspective-container">
			{/* Header Section */}
			<div className="header-section">
				<h1>Our Vision, Mission, and Values</h1>
				<p>Our What, Why, and How.</p>
			</div>
			{/* Card Container */}
			<div className="card-container">
				<div className="card">
					<h2>Mission</h2>
					<hr className="card-line" />
					<p>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Integer nec odio.</p>
				</div>
				<div className="card">
					<h2>Vision</h2>
					<hr className="card-line" />
					<p>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Integer nec odio.</p>
				</div>
			</div>
			{/* Values Section */}
			<div className="values-section">
				<h1>Our Values</h1>
				<hr className="values-line" />
				<ul>
					<li>Placeholder value 1</li>
					<li>Placeholder value 2</li>
					<li>Placeholder value 3</li>
					<li>Placeholder value 4</li>
					<li>Placeholder value 5</li>
				</ul>
			</div>
		</div>
	);
};

export default Perspective;
