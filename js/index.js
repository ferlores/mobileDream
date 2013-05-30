;(function (Container, exports) {
	var EMPTY_CARD = 'PLACEHOLDER',
		INITIAL_CARDS = 5,
		cardContent,
		i;

	for (var i = 0; i < INITIAL_CARDS; i++) {
		cardContent = document.createElement('p');
		cardContent.innerHTML = EMPTY_CARD + " " + i;
		cardContent.className ="inner";
		Container.addCard(cardContent);
	}

	Container.init();

})(window.Container, window)
