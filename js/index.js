;(function (Container, exports) {
	var EMPTY_CARD = 'PLACEHOLDER',
		INITIAL_CARDS = 15,
		cardHead,
		cardContent,
		i;

	debugger;
	if (!localStorage.cache) {
		//pretend this json came from a rest api
		var input = ({ 'records': [
			{'header': 'My Chatter', 'body': 'Dreamforce is awesome'},
			{'header': '@Me', 'body': 'Looking good buddy!'},
			{'header': 'My Agenda', 'body': '10am cofee with Marc Benioff'},
			{'header': 'Agenda', 'body': 'A keynote you are most likely interested in'},
			{'header': 'Maps', 'body': 'Find yourself, in the clouds.'},
			{'header': 'Surveys', 'body': 'Hows your dreamforce experience so far?'},
			{'header': 'Search', 'body': 'What are you looking for?'}
		]});

		localStorage.cache = JSON.stringify(input);
	}

	var output = JSON.parse(localStorage.cache);

	for (var i = 0; i < output.records.length; i++) {
		cardHead = document.createElement('div');
		cardHead.innerHTML = output.records[i].header;

		cardContent = document.createElement('p');
		cardContent.innerHTML =output.records[i].body;
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