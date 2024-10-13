function updateDateYear() {
	const currentYear = new Date().getFullYear();

	const copyrightElement = document.querySelector('.footer_copy');

	copyrightElement.textContent = `© ${currentYear}, Todos los derechos reservados`;
}

export default updateDateYear;
