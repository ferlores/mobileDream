;(function (Container, exports) {
	var EMPTY_CARD = 'PLACEHOLDER',
		INITIAL_CARDS = 15,
		cardHead,
		cardContent,
		cardBack,
		i;

	if (!localStorage.cache) {
		//pretend this json came from a rest api
		var input = ({ 'records': [
			{'header': 'My Chatter', 'body': 'Dreamforce is awesome', 'back': 'Vivamus nec leo purus. Aliquam nec urna sed lacus laoreet vulputate. Suspendisse commodo felis vel dui viverra convallis. Fusce gravida suscipit viverra. Phasellus aliquam, nibh eu laoreet ullamcorper, eros mauris interdum dui, non suscipit lectus '},
			{'header': '@Me', 'body': 'Looking good buddy!', 'back': 'Vivamus nec leo purus. Aliquam nec urna sed lacus laoreet vulputate. Suspendisse commodo felis vel dui viverra convallis. Fusce gravida suscipit viverra. Phasellus aliquam, nibh eu laoreet ullamcorper, eros mauris interdum dui, non suscipit lectus '},
			{'header': 'My Agenda', 'body': '10am cofee with Marc Benioff', 'back': 'Vivamus nec leo purus. Aliquam nec urna sed lacus laoreet vulputate. Suspendisse commodo felis vel dui viverra convallis. Fusce gravida suscipit viverra. Phasellus aliquam, nibh eu laoreet ullamcorper, eros mauris interdum dui, non suscipit lectus '},
			{'header': 'Agenda', 'body': 'A keynote you are most likely interested in', 'back': 'Vivamus nec leo purus. Aliquam nec urna sed lacus laoreet vulputate. Suspendisse commodo felis vel dui viverra convallis. Fusce gravida suscipit viverra. Phasellus aliquam, nibh eu laoreet ullamcorper, eros mauris interdum dui, non suscipit lectus '},
			{'header': 'Maps', 'body': 'Find yourself, in the clouds.', 'back': 'Vivamus nec leo purus. Aliquam nec urna sed lacus laoreet vulputate. Suspendisse commodo felis vel dui viverra convallis. Fusce gravida suscipit viverra. Phasellus aliquam, nibh eu laoreet ullamcorper, eros mauris interdum dui, non suscipit lectus '},
			{'header': 'Surveys', 'body': 'Hows your dreamforce experience so far?', 'back': 'Vivamus nec leo purus. Aliquam nec urna sed lacus laoreet vulputate. Suspendisse commodo felis vel dui viverra convallis. Fusce gravida suscipit viverra. Phasellus aliquam, nibh eu laoreet ullamcorper, eros mauris interdum dui, non suscipit lectus '},
			{'header': 'Search', 'body': 'What are you looking for?', 'back': 'Vivamus nec leo purus. Aliquam nec urna sed lacus laoreet vulputate. Suspendisse commodo felis vel dui viverra convallis. Fusce gravida suscipit viverra. Phasellus aliquam, nibh eu laoreet ullamcorper, eros mauris interdum dui, non suscipit lectus '}
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

		cardBack = document.createElement('p');
		cardBack.innerHTML = output.records[i].back;

		Container.addCard(cardHead, cardContent, cardBack);
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