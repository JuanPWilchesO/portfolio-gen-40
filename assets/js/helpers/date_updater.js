function updateDateYear() {
	const currentYear = new Date().getFullYear();

	const copyrightElement = document.querySelector('.footer_copy');

	copyrightElement.textContent = `© ${currentYear}, All rights reserved`;
}

export default updateDateYear;
