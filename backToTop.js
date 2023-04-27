'use strict';

const backToTop = document.querySelector('#backToTop');

const showOnPx = 100;

const scrollContainer = () => {
	return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
	if (scrollContainer().scrollTop > showOnPx) {
		backToTop.classList.remove('hiddenBtn');
	} else {
		backToTop.classList.add('hiddenBtn');
	}
});

backToTop.addEventListener('click', () => {
	document.querySelector('html').scrollTop = 0;
});
