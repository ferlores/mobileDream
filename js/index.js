;(function (Container, exports) {
	var EMPTY_CARD = 'PLACEHOLDER',
		INITIAL_CARDS = 10,
		cardContent,
		i;

	for (var i = 0; i < INITIAL_CARDS; i++) {
		cardContent = document.createElement('p');
		cardContent.innerHTML = EMPTY_CARD;
		cardContent.className ="inner";
		Container.addCard(cardContent);
	}

})(window.Container, window)
