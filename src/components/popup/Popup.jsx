import React from 'react';
import './popup.css'

import PromoLove from './../../png/promoLove.png'
import PromoSpring from './../../png/promoSpring.png'
import PromoBeaty from './../../png/promoBeaty.png'



const Popup = (props) => {

	let contentPicture
	let classAdd

	if (props.text == 'b') {
		contentPicture = PromoBeaty
		classAdd = 'popup__beaty'
	} else if (props.text == 's') {
		contentPicture = PromoSpring
		classAdd = 'popup__spring'
	}
	else if (props.text == 'l') {
		contentPicture = PromoLove
		classAdd = 'popup__love'
	}


	const hideHandler = (e) => {
		if (e.target.classList.contains('popup__wrapper')) {
			e.target.classList.add('hide')
		}
	}



	return (
		<div className={'popup__wrapper hide ' + classAdd} onClick={hideHandler} >
			<div className="popup__container">
				<img src={contentPicture} alt="" className='popup__promo' />
			</div>
		</div >
	);
};

export default Popup;