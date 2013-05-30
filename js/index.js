;(function (Container, exports) {
	var EMPTY_CARD = 'PLACEHOLDER',
		INITIAL_CARDS = 15,
		cardContent,
		i;

	for (var i = 0; i < INITIAL_CARDS; i++) {
		cardContent = document.createElement('p');
		cardContent.innerHTML = EMPTY_CARD + " " + i;
		cardContent.className ="inner";
		Container.addCard(cardContent);
	}


	Container.init();
	// When ready...
	window.addEventListener("load",function() {
		// Set a timeout...
		setTimeout(function(){
			// Hide the address bar!
			window.scrollTo(0, 1);
		}, 0);
	});

})(window.Container, window);