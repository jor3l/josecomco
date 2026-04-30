import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import dragElement from '../utils/dragElement';

const DesktopWindow = ({ title, children, onClose }) => {
	const containerRef = useRef(null);
	const titleRef = useRef(null);

	useEffect(() => {
		if (containerRef.current && titleRef.current) {
			dragElement(containerRef.current, titleRef.current);
		}
	}, []);

	return (
		<div className='container' ref={containerRef}>
			<div className='title' ref={titleRef}>
				<div className='pull-right'>
					<button className='minimize'>
						<span className='fa fa-minus'></span>
					</button>
					<button className='expand'>
						<span className='fa fa-square-o'></span>
					</button>
					<button className='times' onClick={onClose}>
						<span className='fa fa-times'></span>
					</button>
				</div>
				<h1>
					<div className='icon-my-computer'></div> {title || 'New file'}
				</h1>
			</div>
			<ul className='toolbar'>
				<li>
					<u>F</u>ile
				</li>
				<li>
					<u>E</u>dit
				</li>
				<li>
					<u>V</u>iew
				</li>
				<li>
					<u>H</u>elp
				</li>
			</ul>
			<div className='container-inner'>{children}</div>
			<div className='statusbar'>
				<div
					className='left'
					title='this website was created with resources freely avaiable on codepen and gifcities'
				>
					All rights reserved, &copy; {new Date().getFullYear()}.
				</div>
				<div className='right'>Last saved by Jose Vera on Oct 30, 2024.</div>
			</div>
		</div>
	);
};

DesktopWindow.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
	onClose: PropTypes.func,
};

export default DesktopWindow;
