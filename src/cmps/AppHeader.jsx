import React from 'react';
import {Link} from 'react-router-dom';
// import logoSvg from '../assets/imgs/svg/applogo.svg';
// import logo from '../assets/imgs/product-place.png';

export function AppHeader() {
	return (
		<section className='app-header'>
			<div className='app-header-layout'>
				<section className='app-logo'>
					{/* <img src={logo} alt='' /> */}
					<h1 className='hero-title'>Product Place</h1>
				</section>
			</div>
		</section>
	);
}
