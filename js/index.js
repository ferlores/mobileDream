;(function (Container, exports) {
	var EMPTY_CARD = 'PLACEHOLDER',
		INITIAL_CARDS = 15,
		cardHead,
		cardContent,
		i;

	for (var i = 0; i < INITIAL_CARDS; i++) {
		cardHead = document.createElement('div');
		cardHead.innerHTML = 'Title ' + i;

		cardContent = document.createElement('p');
		cardContent.innerHTML = EMPTY_CARD + " " + i;
		cardContent.className ="inner";
		Container.addCard(cardHead, cardContent);
	}


	Container.init();

	//iphone 5 doesnt need this
	// When ready...
	window.addEventListener("load",function() {
		// Set a timeout...
		setTimeout(function(){
			// Hide the address bar!
			window.scrollTo(0, 1);
		}, 0);
	});

	document.getElementsByTagName('body')[0].addEventListener("touchmove", function(e) {
		e.preventDefault();
	});

})(window.Container, window);