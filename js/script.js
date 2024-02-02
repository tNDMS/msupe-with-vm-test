"use strict"
const iconMenu = document.querySelector('.menu__icon');
console.log(iconMenu)
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	const slIcon = document.querySelector('.switch-language');
	const slBody = document.querySelector('.sl-menu');
	const slList = document.querySelector('.sl-menu__list');
	// const logoBurger = document.querySelector('.header__logo');
	iconMenu.addEventListener("click", function (e) {
		// document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		// logoBurger.classList.toggle('_active');
	})
		slIcon.addEventListener("click", function (e) {
			slBody.classList.toggle('_active');
			slList.classList.toggle('_active');
		}
	)
}


